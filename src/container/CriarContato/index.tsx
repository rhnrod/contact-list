import Avatar from 'boring-avatars'
import { ContainerMain } from '../../styles'
import * as S from './styles'
import { variaveis } from '../../styles/variaveis'

const CriarContato = () => (
  <ContainerMain>
    <h1>Adicionar novo contato</h1>
    <S.Wrapper>
      <Avatar
        variant="beam"
        square
        size={250}
        name={'Rhuan'}
        colors={[
          variaveis.avatarYellow,
          variaveis.avatarOrange,
          variaveis.avatarPink,
          variaveis.avatarGreen,
          variaveis.avatarBlue
        ]}
      />
      <form>
        <S.Label htmlFor="name">Nome</S.Label>
        <S.Input type="text" id="name" />

        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input type="email" id="email" />

        <S.Label htmlFor="tel">Telefone</S.Label>
        <S.Input type="tel" id="tel" />
        <S.ConfirmButton>Adicionar</S.ConfirmButton>
      </form>
    </S.Wrapper>
  </ContainerMain>
)

export default CriarContato
