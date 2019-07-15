import React from 'react'

const MiscellaneousAgendaSection = (talk) => {
  return (
     <div key={`${talk.startDate}-${talk.endDate}`} className={talk.title === "Registro de asistentes" ? "item-container no-border" : "item-container"}>
        <p className="talk-date-container font-size-extra-small pink">{ talk.startDate } - {talk.endDate}</p>
        <p className="talk-container talk-title font-size-medium deep-purple">{ talk.title }</p>
      </div>
  )
}

export default MiscellaneousAgendaSection
