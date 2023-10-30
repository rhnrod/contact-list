import styled from 'styled-components'
import { Button } from '../../styles'
import { variaveis } from '../../styles/variaveis'

type Props = {
  invalid?: boolean
}
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  padding: 16px;
  border: 3px solid #282828;
  border-radius: 12px;
  transition: 0.3s all ease;
`

export const Input = styled.input<Props>`
  display: block;
  font-size: 22px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #000;
  margin-bottom: 16px;

  &:focus {
    outline: none;
  }
`

export const Form = styled.form``
export const ConfirmButton = styled(Button)`
  background-color: ${variaveis.buttonSuccess};
`
export const LabelWrapper = styled.div`
  position: relative;
`
export const Label = styled.label`
  font-family: ${variaveis.fontSecondary};
  font-size: 12px;
  font-weight: bold;
  padding: 0;
`

export const Warn = styled(Label)<Props>`
  display: ${(props) => (props.invalid ? 'block' : 'none')};
  transition: all ease 0.5s;
  color: ${variaveis.buttonDanger};
  position: absolute;
  right: 0;
  bottom: 0;
`
