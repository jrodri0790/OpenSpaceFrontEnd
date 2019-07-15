import React from 'react'
import '../../styles/button.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  getButtonContainerButtonStyles () {
    return this.props.center
      ? "purchase-link center-block"
      : "purchase-link"
  }

  getButtonStyleClasses () {
    return this.props.class === "open-space-vote-button"
      ? "purchase-button open-space-vote-button"
      : this.props.class + " purchase-button"
  }
}

export default Button
