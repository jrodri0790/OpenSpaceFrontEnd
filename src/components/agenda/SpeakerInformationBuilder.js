import React from 'react'

const speakersNames = new Map()
const speakersPictures = new Map()

class SpeakerInformationBuilder {

  constructor(talk) {
    speakersNames.clear()
    speakersPictures.clear()
    this.buildSpeakerInformation(talk)
  }

  getSpeakersNames() {
    return speakersNames
  }

  getSpeakersPictures() {
    return speakersPictures
  }

  buildSpeakerInformation(talk) {
    if (talk.speakers) {
      talk.speakers.forEach(speaker => {
        speakersNames.set(this._buildSpeakerNameKey(talk, speaker),
          <div key={this._buildSpeakerNameKey(talk, speaker)}
               className="speaker-information">
            <span className="speaker-name">{speaker.name},&nbsp;</span><span>{speaker.role}</span>
          </div>
        )
        if (!talk.isWelcome && !talk.isOpenSpace) {
          speakersPictures.set(this._buildSpeakerPictureKey(talk, speaker),
            <img key={this._buildSpeakerPictureKey(talk, speaker)}
                 className="speaker-picture"
                 src={speaker.image
                   ? `/speakers/${speaker.image}`
                   : ''}
                  alt={speaker.name} />
          )
        }
      })
    }
  }

  _buildSpeakerPictureKey (talk, speaker) {
    return `${this._buildSpeakerNameKey(talk, speaker)}-picture`
  }

  _buildSpeakerNameKey (talk, speaker) {
    return `${talk.startDate}-${talk.endDate}-speaker-${talk.speakers.indexOf(speaker)}`
  }
}

export default SpeakerInformationBuilder
