import styled from 'styled-components'

export default function Input({ labelText, placeholderText }) {
  return (
    <label>
      {labelText}
      <InputText placeholder={placeholderText} />
    </label>
  )
}

const InputText = styled.input`
  border: 2px solid #bbb;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  margin: 5px 0;
`
