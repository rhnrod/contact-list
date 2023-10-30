import { ListaContainer } from './styles'
import { Contact } from '../../components/Contato'
import Contato from '../../components/Contato'
import { useSelector } from 'react-redux'

import BotaoAdicionar from '../../components/BotaoAdicionar'
import { RootReducer } from '../../store'
import { ContainerMain } from '../../styles'
import decalc from '../../assets/no-contacts.png'
import { useState } from 'react'
import Paginacao from '../../components/Paginacao'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, valor, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const [currentPage, setCurrentPage] = useState(1)
  const [contactsPerPage, setContactsPerPage] = useState(9)

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

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'nome' && valor === 'crescente') {
        contatosFiltrados = contatosFiltrados.sort(compareByName)
      } else if (criterio === 'nome' && valor === 'decrescente') {
        contatosFiltrados = contatosFiltrados.sort(compareByNameReverse)
      } else if (criterio === 'numero' && valor === 'crescente') {
        contatosFiltrados = contatosFiltrados.sort(compareByNumber)
      } else if (criterio === 'numero' && valor === 'decrescente') {
        contatosFiltrados = contatosFiltrados.sort(compareByNumberReverse)
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const indexOfLastContact = currentPage * contactsPerPage
  const indexOfFirstContact = indexOfLastContact - contactsPerPage
  const currentContacts = filtrarContatos().slice(
    indexOfFirstContact,
    indexOfLastContact
  )

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <ContainerMain>
      {filtrarContatos().length > 0 ? (
        ''
      ) : (
        <>
          <img src={decalc} />
          <h1>Adicione novos contatos para visualizar aqui</h1>
        </>
      )}
      <ListaContainer>
        {currentContacts.map((c) => (
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
      <Paginacao
        contactsPerPage={contactsPerPage}
        totalContacts={filtrarContatos().length}
        paginate={paginate}
      />
    </ContainerMain>
  )
}

export default ListaDeContatos
