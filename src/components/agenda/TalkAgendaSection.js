import React, { Component } from 'react'
import talks from '../../data/talks'
import SpeakerInformationBuilder from './SpeakerInformationBuilder'

class TalkAgendaSection extends Component {
  constructor (props) {
    super(props)
    this.handleReadMoreButtonClicked = this.handleReadMoreButtonClicked.bind(this)
  }

  handleReadMoreButtonClicked() {
    const talkPosition = this.props.talk
    this.props.onReadMoreClicked(talks.indexOf(talkPosition))
  }

  render() {
    const talkHourClassNames = "talk-date-container font-size-extra-small"
    const talk = this.props.talk
    const speakerInformationBuilder = new SpeakerInformationBuilder(talk)

    return(
      <div key={`${talk.startDate}-${talk.endDate}`}
           className={talk.isInformative ? 'item-container informative' : 'item-container talk'}>
        <div className={talk.isKeyNote ? `${talkHourClassNames} keynote-hour-purple` : `${talkHourClassNames} pink`}>
          { talk.startDate } - {talk.endDate}
        </div>
        <div className={talk.isKeyNote ? "talk-container keynote" : "talk-container" }>
          <div className={talk.isKeyNote? "keynote-title" : "hidden"}>KEYNOTE</div>
          <div className="talk-title font-size-medium deep-purple">{ talk.title }</div>
          <div className="agenda-speakers">
            <div className="speakerNames">
              { Array.from(speakerInformationBuilder.getSpeakersNames().values()) }
            </div>
            <div className={talk.abstract ? 'talk-abstract' : 'hidden'}>
              <div className={talk.isOpenSpace ? 'hidden' : 'speaker-picture-container'}>
                { Array.from(speakerInformationBuilder.getSpeakersPictures().values())}
              </div>
              <button className={"read-more-speaker light-purple"} onClick={this.handleReadMoreButtonClicked}>
                Leer m&aacute;s
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TalkAgendaSection
