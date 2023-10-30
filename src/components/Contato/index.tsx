import Avatar from 'boring-avatars'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareCheck,
  faPenToSquare,
  faTrash,
  faRectangleXmark
} from '@fortawesome/free-solid-svg-icons'

import { remover, editar } from '../../store/reducers/contatos'
import { variaveis } from '../../styles/variaveis'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { useEffect, useState } from 'react'

export type Contact = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Contact) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(999999999)

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    setTelefone(telefoneOriginal)
  }, [telefoneOriginal])

  const cancelar = () => {
    setEstaEditando(!estaEditando)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  const salvar = () => {
    setEstaEditando(!estaEditando)
    dispatch(
      editar({
        email,
        telefone,
        nome,
        id
      })
    )
  }

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
        <S.InfoName
          disabled={!estaEditando}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <S.InfoMail
          type="email"
          disabled={!estaEditando}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.InfoPhone
          type="tel"
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
            onClick={salvar}
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
            onClick={cancelar}
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
