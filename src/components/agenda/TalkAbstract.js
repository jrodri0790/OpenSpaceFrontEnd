import React, { Component } from 'react'
import SpeakerInformationBuilder from './SpeakerInformationBuilder'
import '../../styles/agenda/talk-abstract.css'

class TalkAbstract extends Component {
  render() {
    const talk = this.props.talk
    const speakerInformationBuilder = new SpeakerInformationBuilder(talk)
    return(
      <div>
        <div className="talk-container abstract">
          <div className={talk.isKeyNote? "keynote-title" : "hidden"}>KEYNOTE</div>
          <div className="talk-title font-size-medium deep-purple">{ talk.title }</div>
          <div className="speakerNames">
            { Array.from(speakerInformationBuilder.getSpeakersNames().values()) }
          </div>
        </div>
        <div className={'talk-summary'}>
          <div className="speaker-picture-container">
            { Array.from(speakerInformationBuilder.getSpeakersPictures().values())}
          </div>
          <div>
            {this._formatAbstract(talk)}
          </div>
        </div>
      </div>
    )
  }

  _formatAbstract(talk)  {
    const paragraphs = talk.abstract.split('\n')
    let abstractComponent = new Map()
    for (let i = 0; i < paragraphs.length; i ++) {
      abstractComponent.set(i, <p key={`${talk.startDate}-${talk.endDate}-paragraph-${i}`}
                                  className="abstract-content gray">{paragraphs[i]}</p>)
    }
    return Array.from(abstractComponent.values())
  }
}

export default TalkAbstract
