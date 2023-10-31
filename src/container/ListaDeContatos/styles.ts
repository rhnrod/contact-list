import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

type Props = {
  ativo?: boolean
}

export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  position: relative;
`

export const Wrapper = styled.h4`
  position: absolute;
  display: flex;
  top: 10px;
  right: 40px;
  gap: 8px;
  color: #000;
  align-items: center;
`

export const Botao = styled.button<Props>`
  border: none;
  display: inline-block;
  font-size: 12px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  color: ${(props) => (props.ativo ? '#fff' : '#000')};
  background-color: ${(props) =>
    props.ativo ? `${variaveis.buttonStandard}` : 'grayscale()'};

  font-weight: bold;
`
