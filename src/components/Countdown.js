import React from 'react'
import CountDown from 'react-countdown-custom-labels'
import '../styles/countdown.css'

function finish() {
  console.log('The xconf day is here!')
}

const XConfCountDown = () => {
  const messages = {
    days: {
      plural: 'Días',
      singular: 'Día'
    },
    hours: 'Horas',
    mins: 'Min',
    segs: 'Seg'
  }
  return (
    <CountDown
      date="2029-11-10T09:00:00-05:00"
      className="countdown"
      {...messages}
      onEnd={finish}
    />
  )
}

export default XConfCountDown
