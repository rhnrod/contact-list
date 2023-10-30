import Avatar from 'boring-avatars'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareCheck,
  faPenToSquare,
  faTrash,
  faRectangleXmark
} from '@fortawesome/free-solid-svg-icons'

import { remover } from '../../store/reducers/contatos'
import { variaveis } from '../../styles/variaveis'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { useEffect, useState } from 'react'

export type Contact = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Contact) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(999999999)

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    setTelefone(telefoneOriginal)
  }, [telefoneOriginal])

  return (
    <S.ContactCard>
      <Avatar
        variant="beam"
        size={80}
        name={nome}
        colors={[
          variaveis.avatarYellow,
          variaveis.avatarOrange,
          variaveis.avatarPink,
          variaveis.avatarGreen,
          variaveis.avatarBlue
        ]}
      />
      <S.Info key={id}>
        <S.InfoName disabled={!estaEditando} value={nome} />
        <S.InfoMail
          disabled={!estaEditando}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.InfoPhone
          disabled={!estaEditando}
          value={telefone}
          onChange={(e) =>
            isNaN(Number(e.target.value))
              ? setTelefone(telefoneOriginal)
              : setTelefone(Number(e.target.value))
          }
        />
      </S.Info>
      {estaEditando ? (
        <>
          <FontAwesomeIcon
            icon={faSquareCheck}
            className="editCheck"
            onClick={() => setEstaEditando(!estaEditando)}
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit"
            onClick={() => setEstaEditando(!estaEditando)}
          />
        </>
      )}
      {estaEditando ? (
        <>
          <FontAwesomeIcon
            icon={faRectangleXmark}
            className="editTrash"
            onClick={() => setEstaEditando(!estaEditando)}
          />
        </>
      ) : (
        <FontAwesomeIcon
          icon={faTrash}
          className="editTrash"
          onClick={() => dispatch(remover(id))}
        />
      )}
    </S.ContactCard>
  )
}

export default Contato
