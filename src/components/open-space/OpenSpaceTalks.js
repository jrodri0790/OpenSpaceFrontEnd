import React, { Component } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import talks from '../../data/talks'

class OpenSpaceTalks extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.updateButtonEnabledFlag = this.updateButtonEnabledFlag.bind(this)
    this.buildTalkCheckedStateName = this.buildTalkCheckedStateName.bind(this)
  }

  updateButtonEnabledFlag () {
    this.props.setValidityOfSelectedTalks(this.getCheckedTalks())
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
    const openSpaceTalks = new Map()
    talks.forEach(talk => {
      const disabled = this.getCheckedTalks().length >= 3 && !this.state[this.buildTalkCheckedStateName(talk.backendCode)]
      if (talk.isTalk && !talk.isInformative) {
        openSpaceTalks.set(talk.startDate,
          <div key={this.buildTalkCheckedStateName(talk.backendCode)} className={disabled ? "open-space-talk disabled" : "open-space-talk"}>
            <FormControlLabel disabled={disabled} className="open-space-title-talk"
              control={
                <Checkbox checked={this.state[this.buildTalkCheckedStateName(talk.backendCode)]}
                          onChange={(event) => this.handleChange(event, this.buildTalkCheckedStateName(talk.backendCode))}
                          value={talk.startDate} />
              }
              label={talk.title}
            />
          </div>
        )
      }
    })
    return (
      <div className="open-space-talks-container">
        { Array.from(openSpaceTalks.values()) }
      </div>
    )
  }
}

export default OpenSpaceTalks
