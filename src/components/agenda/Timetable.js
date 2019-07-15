import React, {Component} from 'react'
import SliderAgenda from './SliderAgenda'
import TalkAbstract from './TalkAbstract'
import ScreenSizeUtils from '../utils/ScreenSizeUtils'

class Timetable extends Component {
  render() {
    const isTalkAbstractModal = this.props.isTalkAbstractModal
    const agenda = this.props.agenda
    const talk = this.props.talk
    const talkPosition = this.props.talkPosition
    if (isTalkAbstractModal) {
      return (
        <TalkAbstract talk={talk} />
      )
    } else {
      return (
        <SliderAgenda isMobile={ScreenSizeUtils.isMobile()} agenda={agenda} talkPosition={talkPosition} />
      )
    }
  }
}

export default Timetable
