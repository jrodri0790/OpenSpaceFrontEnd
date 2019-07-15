import React from 'react'
import Button from './Button'

class LinkButton extends Button {
  constructor(props) {
    super(props)
  }

  render () {
    const text = this.props.text
    const url = this.props.url
    const buttonContainerButtonStyles = this.getButtonContainerButtonStyles()
    const styleClass = this.getButtonStyleClasses()
    return (
      <a href={url} target="_blank" className={buttonContainerButtonStyles}>
        <button className={styleClass}>{text}</button>
      </a>
    )
  }
}

export default LinkButton
