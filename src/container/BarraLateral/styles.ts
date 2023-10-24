import styled from 'styled-components'

export const BarraLateralContainer = styled.div`
  width: 360px;
  height: 100vh;
  background-color: #ccc;
`

export const Wrapper = styled.div`
  position: relative;
  width: 300px;

  input {
    position: relative;
    font-size: 20px;
    left: 28px;
    margin: 16px;
    max-width: 80%;
    height: 28px;
    border-radius: 0 6px 6px 0;
    border: none;

    &:focus {
      outline: none;
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: #333;
    padding: 6px;
    border-radius: 6px 0 0 6px;
    background-color: #fff;
  }
`
