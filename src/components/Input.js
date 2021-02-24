import styled from 'styled-components/macro'

export default function Input({ labelText, name, placeholderText }) {
  return (
    <label>
      {labelText}
      <InputText name={name} placeholder={placeholderText} />
    </label>
  )
}

const InputText = styled.input`
  border: 2px solid #bbb;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
`
