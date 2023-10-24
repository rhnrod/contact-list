import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

export const ContactCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
  padding-left: 20px;

  width: 340px;
  height: 120px;
  cursor: pointer;
  transition: all ease 0.2s;

  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow:
    5px 5px 5px #5a5a5a,
    -5px -5px 5px #ffffff;

  &:hover {
    box-shadow:
      8px 8px 8px #5a5a5a,
      -8px -8px 8px #ffffff;
  }

  p {
    font-family: ${variaveis.fontSecondary};
  }
`
