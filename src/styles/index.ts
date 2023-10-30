import styled, { createGlobalStyle } from 'styled-components'
import { variaveis } from './variaveis'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${variaveis.fontPrimary};
  list-style-type: none;
  scrollbar-width: none;
}
`

export const Container = styled.div`
  display: flex;
`

export const ContainerMain = styled.div`
  display: flex;
  width: 1120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  padding-left: 40px;
  user-select: none;

  overflow-y: scroll;
`

export const Button = styled.button`
  padding: 8px 16px;
  color: #fff;
  font-weight: bold;
  font-family: ${variaveis.fontSecondary};
  background-color: ${variaveis.avatarGreen};
  font-size: 20px;
  width: 100%;
  border: none;
  opacity: 0.8;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
