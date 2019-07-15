import React from 'react'
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const AssistantCodeInput = ({setValidityOfAssistantCode}) => {
  const handleOnChange = (event) => {
    const assistantCode = event.target.value
    const isValidAssistantCode = assistantCode.match(/^XC[A-Z]{3}-\d{3}$/gi)
    setValidityOfAssistantCode(isValidAssistantCode !== null, assistantCode)
  }
  return (
    <div className="assistant-code-container open-space-title-talk">
      <label htmlFor="participant-code">Código de Participante</label>
      <Input id="participant-code" placeholder="XCAAA-111" onChange={handleOnChange} />
      <div className="help">
        El código puedes encontrarlo en la parte superior izquierda de tu entrada.
      </div>
    </div>
  )
}

export default AssistantCodeInput
