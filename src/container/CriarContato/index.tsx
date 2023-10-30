import Avatar from 'boring-avatars'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { v4 as uuidv4 } from 'uuid'

import { ContainerMain } from '../../styles'
import { variaveis } from '../../styles/variaveis'
import * as S from './styles'
import Contato from '../../models/Contato'

const CriarContato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('' as unknown as number)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, telefone, uuidv4())

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
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
          <S.Label htmlFor="name">Nome</S.Label>
          <S.Input
            type="text"
            id="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <S.Label htmlFor="tel">Telefone</S.Label>
          <S.Input
            type="tel"
            id="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value as unknown as number)}
          />
          <S.ConfirmButton type="submit">Adicionar</S.ConfirmButton>
        </form>
      </S.Wrapper>
    </ContainerMain>
  )
}

export default CriarContato
