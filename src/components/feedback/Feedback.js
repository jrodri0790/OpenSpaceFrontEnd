import React, { Component } from 'react'
import Header from '../Header'
import SocialMedia from '../SocialMedia'
import Footer from '../Footer'
import FeedbackSubmitButton from '../buttons/FeedbackSubmitButton'
import '../../styles/feedback.css'
import axios from 'axios/index'
import { withSnackbar } from 'notistack'
import Select from 'react-select'

class Feedback extends Component {
    constructor (props) {
        super(props)
        this.state = {
            chooseTalk: 0,
            isProcessing: false,
            selectedOption: null,
            feedbackText: ""
        }
        this.handleSelectionChange = this.handleSelectionChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.submitFeedback = this.submitFeedback.bind(this)
        this.getTalks = this.getTalks.bind(this)
    }

    getTalks () {
        const talksEndpointURI = 'http://localhost:5000/open-space/talks'
        axios.get(talksEndpointURI)
            .then((response) => {
                if (response.status === 200) {
                    return response.body.talks.forEach(talk =>  {
                        talk.value = talk.id
                        talk.label = talk.name
                    })
                }
            })
            .catch(() => {
                const typeNotification = 'error'
                this._showNotification('Ha ocurrido un error, inténtelo más tarde.', typeNotification)
                return null
            })
    }

    submitFeedback () {
        this.setState({isProcessing: true})
        const voteEndpointURI = 'http://localhost:5000/open-space/feedback'
        axios.post(voteEndpointURI, {
            "talk": this.state.selectedOption,
            "feedback": this.feedbackText
        })
        .then((response) => {
            this.setState({isProcessing: false})
            if (response.status === 200) {
                this._showNotification('Tu feedback fue registrado exitosamente.', 'success')
            }
        })
        .catch((error) => {
            const typeNotification = 'error'
            this.setState({isProcessing: false})
            if (error.response) {
                if (error.response.status === 401) {
                    this._showNotification('Lo siento, sólo puedes votar una vez.', typeNotification)
                }
            } else {
                this._showNotification('Ha ocurrido un error, inténtelo más tarde.', typeNotification)
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
        if (this.state.isProcessing) {
            return(
                <div className="overlay center-block">
                    <i className="loading-spinner fas fa-spinner fa-5x light-purple" />
                </div>
            )
        }
        return null
    }

    handleSelectionChange (selectedOption) {
        this.setState({ selectedOption });
    }

    handleTextChange (event) {
        this.setState({feedbackText: event.target.value});
    }

    render () {
        const { selectedOption, feedbackText } = this.state
        const isSubmitButtonEnabled = this.state.selectedOption && this.state.feedbackText
        const options = this.getTalks()

        return (
            <div>
                <div className="section-container-big">
                    <div className="feedback-container">
                        <div className="feedback-trapezoid">
                            <div className="feedback-left"></div>
                            <div className="feedback-center font-size-large">Ayúdanos con tu Feedback</div>
                            <div className="feedback-right"></div>
                        </div>
                        <Select value={selectedOption} onChange={this.handleSelectionChange} options={options}
                            className="feedback-select" isSearchable placeholder="Busque la conferencia"
                            classNamePrefix="feedback-select"/>
                        <textarea className="feedback-text" placeholder="Escriba su feedback aqui" rows="20"
                            value={feedbackText} onChange={this.handleTextChange}></textarea>
                        <FeedbackSubmitButton center={true} class="feedback-button" submitForm={this.submitFeedback}
                            isButtonEnabled={isSubmitButtonEnabled} text="ENVIAR" />
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

export default withSnackbar(Feedback)
