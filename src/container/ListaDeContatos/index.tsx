import { Container, ListaContainer } from './styles'

import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      Termo: {termo} | Ordem: {valor}
      <ListaContainer>
        {filtraTarefas().map((c) => (
          <Contato
            key={c.id}
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
