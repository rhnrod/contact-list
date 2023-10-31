import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const BarraLateralContainer = styled.aside`
  width: 360px;
  height: 100vh;
  background-color: #ccc;
  padding: 16px;
`

export const Titulo = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;

  .iconPhone {
    height: 24px;
    color: ${variaveis.buttonStandard};
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 20px;

  input {
    position: relative;
    font-size: 20px;
    left: 28px;
    max-width: 300px;
    width: 100%;
    height: 28px;
    border-radius: 0 6px 6px 0;
    border: none;

    &:focus {
      outline: none;
    }

    &::selection {
      background-color: ${variaveis.buttonStandard};
      color: #fff;
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #333;
    padding: 6px;
    border-radius: 6px 0 0 6px;
    background-color: #fff;
  }
`
export const LinkWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`
export const BotaoVoltar = styled(Link)`
  padding: 8px 16px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 6px;
  text-align: left;
  margin: 4px 0;
  cursor: pointer;
  border: none;
  background-color: ${variaveis.buttonStandard};
  text-decoration: none;
  color: #fff;
`
