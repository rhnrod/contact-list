import Avatar from 'boring-avatars'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { v4 as uuidv4 } from 'uuid'

import { ContainerMain } from '../../styles'
import { variaveis } from '../../styles/variaveis'
import * as S from './styles'
import Contato from '../../models/Contato'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const CriarContato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('' as unknown as number)
  const [emailIsNotValid, setEmailIsNotValid] = useState(false)
  const [nameIsNotValid, setNameIsNotValid] = useState(false)
  const [telefoneIsNotValid, setTelefoneIsNotValid] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarContato = () => {
    const contatoParaAdicionar = new Contato(nome, email, telefone, uuidv4())

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  const validateEmail = () => {
    setEmailIsNotValid(true)
  }

  const revalidateEmail = () => {
    setEmailIsNotValid(false)
  }

  const validateName = () => {
    setNameIsNotValid(true)
  }

  const revalidateName = () => {
    setNameIsNotValid(false)
  }

  const validateTelefone = () => {
    setTelefoneIsNotValid(true)
  }

  const revalidateTelefone = () => {
    setTelefoneIsNotValid(false)
  }

  return (
    <ContainerMain>
      <h1>Adicionar novo contato</h1>
      <S.Wrapper>
        <Avatar
          variant="beam"
          square
          size={250}
          name={nome}
          colors={[
            variaveis.avatarYellow,
            variaveis.avatarPink,
            variaveis.avatarRed,
            variaveis.avatarGreen,
            variaveis.avatarBlue
          ]}
        />
        <form onSubmit={cadastrarContato}>
          <S.LabelWrapper>
            <S.Label htmlFor="name">Nome </S.Label>
            <S.Warn as={'span'} invalid={nameIsNotValid}>
              <FontAwesomeIcon icon={faCircleExclamation} /> Obrigatório
            </S.Warn>
          </S.LabelWrapper>
          <S.Input
            type="text"
            id="name"
            value={nome}
            onChange={(e) => {
              revalidateName()
              setNome(e.target.value)
            }}
            onInvalid={validateName}
            required
          />

          <S.LabelWrapper>
            <S.Label htmlFor="email">E-mail </S.Label>
            <S.Warn as={'span'} invalid={emailIsNotValid}>
              <FontAwesomeIcon icon={faCircleExclamation} /> Insira um e-mail
              válido
            </S.Warn>
          </S.LabelWrapper>
          <S.Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              revalidateEmail()
              setEmail(e.target.value)
            }}
            onInvalid={validateEmail}
            required
          />

          <S.LabelWrapper>
            <S.Label htmlFor="tel">Telefone</S.Label>
            <S.Warn as={'span'} invalid={telefoneIsNotValid}>
              <FontAwesomeIcon icon={faCircleExclamation} /> Insira um número
              válido
            </S.Warn>
          </S.LabelWrapper>
          <S.Input
            type="tel"
            id="tel"
            value={telefone}
            onChange={(e) => {
              revalidateTelefone()
              setTelefone(e.target.value as unknown as number)
            }}
            onInvalid={validateTelefone}
            required
          />
          <S.ConfirmButton type="submit">Adicionar</S.ConfirmButton>
        </form>
      </S.Wrapper>
    </ContainerMain>
  )
}

export default CriarContato
