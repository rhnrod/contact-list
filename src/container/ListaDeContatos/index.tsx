import { Container, ListaContainer } from './styles'

import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const estado = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ListaContainer>
        {estado.map((c) => (
          <Contato
            nome={c.nome}
            telefone={c.telefone}
            email={c.email}
            id={c.id}
          />
        ))}
        <BotaoAdicionar />
      </ListaContainer>
    </Container>
  )
}

export default ListaDeContatos
