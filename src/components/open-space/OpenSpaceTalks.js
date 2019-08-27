import React, { Component } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import axios from 'axios/index'
import urls from '../../config'

class OpenSpaceTalks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talks: []
    }
    this.getTalks()
    this.updateButtonEnabledFlag = this.updateButtonEnabledFlag.bind(this)
    this.buildTalkCheckedStateName = this.buildTalkCheckedStateName.bind(this)
  }

  updateButtonEnabledFlag () {
    this.props.setValidityOfSelectedTalks(this.getCheckedTalks())
  }

  getTalks () {
    const talksEndpointURI = urls.talksUrl
    axios.get(talksEndpointURI)
    .then((response) => {
      if (response.status === 200) {
        this.setState({talks: response.data})
      }
    })
    .catch(() => {
      const typeNotification = 'error'
      this._showNotification('Oops ha ocurrido un error, inténtelo más tarde.', typeNotification)
      this.setState({talks: []})
    })
  }

  getCheckedTalks () {
     return Object.keys(this.state).reduce((checkedTalks, currentStateKey) => {
      if (currentStateKey.includes('checked') && this.state[currentStateKey] === true) {
        checkedTalks.push(currentStateKey)
        return checkedTalks
      }
      return checkedTalks
    }, [])
  }

  handleChange (event, name) {
    this.setState({ [name]: event.target.checked }, this.updateButtonEnabledFlag)
  }

  buildTalkCheckedStateName(talkCode) {
    return 'checked:' + talkCode
  }

  render() {
    const { talks } = this.state
    const openSpaceTalks = new Map()

    talks.forEach(talk => {
      const disabled = this.getCheckedTalks().length >= 3 && !this.state[this.buildTalkCheckedStateName(talk.backendCode)]
      openSpaceTalks.set(talk.id,
        <div key={this.buildTalkCheckedStateName(talk.id)} className={disabled ? "open-space-talk disabled" : "open-space-talk"}>
          <FormControlLabel disabled={disabled} className="open-space-title-talk"
            control={
              <Checkbox checked={this.state[this.buildTalkCheckedStateName(talk.id)]}
                        onChange={(event) => this.handleChange(event, this.buildTalkCheckedStateName(talk.id))}
                        value={talk.id.toString()} />
            }
            label={talk.name}
          />
        </div>
      )
    })
    return (
      <div className="open-space-talks-container">
        { Array.from(openSpaceTalks.values()) }
      </div>
    )
  }
}

export default OpenSpaceTalks
