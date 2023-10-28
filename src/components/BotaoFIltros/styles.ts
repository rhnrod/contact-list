import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

export const Title = styled.h1`
  font-size: 20px;
  margin-top: 60px;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  background-color: ${variaveis.buttonStandard};
  color: #fff;
  padding: 8px 16px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 6px;
  text-align: left;
  width: 100%;
  margin: 4px 0;
  cursor: pointer;
  border: none;
`
