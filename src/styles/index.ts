import styled, { createGlobalStyle } from 'styled-components'
import { variaveis } from './variaveis'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${variaveis.fontPrimary}
}
`

export const Container = styled.div`
  display: flex;
`
