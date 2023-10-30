import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

export const Nav = styled.nav`
  position: fixed;
  bottom: 10px;
`
export const NavLinks = styled.ul`
  display: flex;
  gap: 2px;
`

export const Pages = styled.a`
  display: inline-block;

  height: 30px;
  width: 30px;
  font-size: 20px;
  font-family: ${variaveis.fontSecondary};
  font-weight: bold;
  border: 2px solid ${variaveis.buttonStandard};
  text-align: center;
  cursor: pointer;

  &.ativo {
    background-color: ${variaveis.buttonStandard};
    color: #fff;
  }
`
