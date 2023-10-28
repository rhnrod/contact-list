import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

export const BotaoRedondo = styled.a`
  position: fixed;
  padding: 16px;
  font-size: 22px;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: ${variaveis.buttonStandard};
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  opacity: 0.35;
  z-index: 1;

  user-select: none;

  &:hover {
    opacity: 1;
  }
`
