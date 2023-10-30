import { Container, ListaContainer } from './styles'
import { Contact } from '../../components/Contato'
import Contato from '../../components/Contato'
import { useSelector } from 'react-redux'

import BotaoAdicionar from '../../components/BotaoAdicionar'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, valor, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  )

  function compareByName(a: Contact, b: Contact) {
    return a.nome.localeCompare(b.nome)
  }

  function compareByNameReverse(a: Contact, b: Contact) {
    return b.nome.localeCompare(a.nome)
  }

  function compareByNumber(a: Contact, b: Contact) {
    return a.telefone - b.telefone
  }

  function compareByNumberReverse(a: Contact, b: Contact) {
    return b.telefone - a.telefone
  }

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'nome' && valor === 'crescente') {
        tarefasFiltradas = tarefasFiltradas.sort(compareByName)
      } else if (criterio === 'nome' && valor === 'decrescente') {
        tarefasFiltradas = tarefasFiltradas.sort(compareByNameReverse)
      } else if (criterio === 'numero' && valor === 'crescente') {
        tarefasFiltradas = tarefasFiltradas.sort(compareByNumber)
      } else if (criterio === 'numero' && valor === 'decrescente') {
        tarefasFiltradas = tarefasFiltradas.sort(compareByNumberReverse)
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <Container>
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
