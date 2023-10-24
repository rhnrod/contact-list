import { Container, ListaContainer, Titulo } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'

import Contato, { Contact } from '../../components/Contato'

const contatos: Contact[] = [
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  },
  {
    nome: 'Rhuan',
    telefone: 55555555,
    email: 'rhuan@email.io',
    id: uuidv4()
  }
]

const ListaDeContatos = () => {
  return (
    <Container>
      <Titulo>
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <h1>CallMe Maybe</h1>
      </Titulo>
      <ListaContainer>
        {contatos.map((c) => (
          <Contato
            nome={c.nome}
            telefone={c.telefone}
            email={c.email}
            id={c.id}
          />
        ))}
      </ListaContainer>
    </Container>
  )
}

export default ListaDeContatos
