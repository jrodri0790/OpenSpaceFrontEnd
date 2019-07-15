import React from 'react'
import Button from './Button'

class VotingOpenSpaceButton extends Button {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.submitVotingForm()
  }

  render () {
    const text = this.props.text
    const url = this.props.url
    const buttonContainerButtonStyles = this.getButtonContainerButtonStyles()
    const styleClass = this.getButtonStyleClasses()
    return (
      <a href={url} target="_blank" className={buttonContainerButtonStyles}>
        <button disabled={!this.props.isButtonEnabled}
                className={styleClass}
                onClick={this.handleClick}>
          {text}
        </button>
      </a>
    )
  }
}

export default VotingOpenSpaceButton
