import styled from 'styled-components'
import { Button } from '../../styles'
import { variaveis } from '../../styles/variaveis'

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  padding: 16px;
  border: 1px solid #282828;
  border-radius: 12px;
`

export const Input = styled.input`
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

export const ConfirmButton = styled(Button)``

export const Label = styled.label`
  font-family: ${variaveis.fontSecondary};
  font-size: 12px;
  font-weight: bold;
  padding: 0;
`
