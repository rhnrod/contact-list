import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'
type Props = {
  editando?: boolean
}

export const ContactCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
  padding-left: 20px;
  position: relative;

  width: 340px;
  height: 120px;
  transition: all ease 0.2s;

  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 5px 5px 5px #5a5a5a;

  &:hover {
    box-shadow: 8px 8px 8px #5a5a5a;
  }

  &:hover .edit,
  &:hover .editTrash,
  &:hover .editCheck {
    display: block;
  }

  .edit {
    position: absolute;
    top: 20px;
    right: 20px;
    display: none;
    padding: 8px;
    cursor: pointer;

    &:hover {
      color: ${variaveis.avatarBlue};
    }
  }

  .editCheck {
    position: absolute;
    top: 20px;
    right: 20px;
    display: none;
    padding: 8px;
    cursor: pointer;

    &:hover {
      color: ${variaveis.buttonSuccess};
    }
  }

  .editTrash {
    position: absolute;
    top: 20px;
    right: 50px;
    display: none;
    padding: 8px;
    cursor: pointer;

    &:hover {
      color: ${variaveis.buttonDanger};
    }
  }
`

export const Warn = styled.p<Props>`
  display: ${(props) => (props.editando ? 'block' : 'none')};
  font-size: 10px;
  font-family: ${variaveis.fontSecondary};
  font-weight: bold;
  position: absolute;
  bottom: 5px;
  right: 30px;

  em {
    padding-left: 4px;
  }
`

export const Info = styled.div`
  max-width: 200px;
`
export const InfoName = styled.input`
  font-family: ${variaveis.fontPrimary};
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  border: none;
  max-width: 120px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:disabled {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`
export const InfoMail = styled.input`
  font-family: ${variaveis.fontSecondary};
  font-size: 14px;
  background-color: transparent;
  border: none;
  max-width: 120px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:disabled {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`

export const InfoPhone = styled.input`
  font-family: ${variaveis.fontSecondary};
  background-color: transparent;
  border: none;
  max-width: 120px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:disabled {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`
