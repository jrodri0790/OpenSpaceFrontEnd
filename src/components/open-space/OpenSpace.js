import React, { Component } from 'react'
import Header from '../Header'
import SocialMedia from '../SocialMedia'
import OpenSpaceHeader from './OpenSpaceHeader'
import OpenSpaceTalks from './OpenSpaceTalks'
import VotingOpenSpaceButton from '../buttons/VotingOpenSpaceButton'
import AssistantCodeInput from './AssistantCodeInput'
import Footer from '../Footer'
import '../../styles/open-space.css'
import axios from 'axios/index'
import { withSnackbar } from 'notistack'

class OpenSpace extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chosenTalks: 0,
      quantityOfSelectedTalksIsValid: false,
      isValidAssistantCode: false,
      isVoting: false
    }
    this.setValidityOfSelectedTalks = this.setValidityOfSelectedTalks.bind(this)
    this.setValidityOfAssistantCode = this.setValidityOfAssistantCode.bind(this)
    this.submitVotingForm = this.submitVotingForm.bind(this)
    this.getTalkCodesForBackend = this.getTalkCodesForBackend.bind(this)
  }

  setValidityOfSelectedTalks (checkedTalks) {
    const enabled = checkedTalks.length === 3
    this.setState({ quantityOfSelectedTalksIsValid: enabled, selectedTalks: checkedTalks })
  }

  setValidityOfAssistantCode (isValidAssistantCode, assistantCode) {
    this.setState({ isValidAssistantCode, assistantCode })
  }

  getTalkCodesForBackend () {
    return this.state.selectedTalks.map((currentTalk) => {
      return parseInt(currentTalk.split(":")[1])
    })
  }

  submitVotingForm () {
    this.setState({isVoting: true})
    const voteEndpointURI = 'https://xconf-open-space.herokuapp.com/open-space/vote'
    axios.post(voteEndpointURI, {
      "code": this.state.assistantCode,
      "talks": this.getTalkCodesForBackend()
    })
    .then((response) => {
      this.setState({isVoting: false})
      if (response.status === 200) {
        this._showNotification('Tu voto fue registrado exitosamente.', 'success')
      }
    })
    .catch((error) => {
      const typeNotification = 'error'
      this.setState({isVoting: false})
      if (error.response) {
        if (error.response.status === 401) {
          this._showNotification('Lo siento, sólo puedes votar una vez.', typeNotification)
        } else if (error.response.status === 403) {
          this._showNotification('Lo siento, el código que ingresaste es incorrecto.', typeNotification)
        }
      } else {
        this._showNotification('Ha ocurrido un error, intentelo mas tarde.', typeNotification)
      }
    })
  }

  _showNotification (message, type) {
    const { enqueueSnackbar } = this.props;
    enqueueSnackbar(message, { variant: type, autoHideDuration: 2000, anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      } })
  }

  getOverlayLoading () {
    if (this.state.isVoting) {
      return(
        <div className="overlay center-block">
          <i className="loading-spinner fas fa-spinner fa-5x light-purple" />
        </div>
      )
    }
    return null
  }

  render () {
    const isVotingButtonEnabled = this.state.quantityOfSelectedTalksIsValid && this.state.isValidAssistantCode

    return (
      <div>
        <div className="section-container">
          <div className="open-space-container">
            <OpenSpaceHeader />
            <OpenSpaceTalks setValidityOfSelectedTalks={this.setValidityOfSelectedTalks} />
            <AssistantCodeInput setValidityOfAssistantCode={this.setValidityOfAssistantCode} />
            <VotingOpenSpaceButton center={true}
                                   class="open-space-vote-button"
                                   submitVotingForm={this.submitVotingForm}
                                   isButtonEnabled={isVotingButtonEnabled}
                                   text="VOTAR" />
            {this.getOverlayLoading()}
          </div>
        </div>
        <Header />
        <SocialMedia />
        <Footer />
      </div>
    )
  }
}

export default withSnackbar(OpenSpace)
