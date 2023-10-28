import { Container, ListaContainer, Titulo } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'

import Contato, { Contact } from '../../components/Contato'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const contatos: Contact[] = [
  {
    nome: 'Jorge Amado',
    telefone: 55555555,
    email: 'amadojorge@email.io',
    id: uuidv4()
  },
  {
    nome: 'Machado de Assis',
    telefone: 55555555,
    email: 'deassis@email.io',
    id: uuidv4()
  },
  {
    nome: 'Augusto dos Anjos',
    telefone: 55555555,
    email: 'augusto.monstro@email.io',
    id: uuidv4()
  },
  {
    nome: 'Clarice Lispector',
    telefone: 55555555,
    email: 'clisp@email.io',
    id: uuidv4()
  },
  {
    nome: 'Lya Luft',
    telefone: 55555555,
    email: 'lya_puft@email.io',
    id: uuidv4()
  },
  {
    nome: 'Graciliano Ramos',
    telefone: 55555555,
    email: 'graciliano.ramos@email.io',
    id: uuidv4()
  },
  {
    nome: 'Guimarães Rosa',
    telefone: 55555555,
    email: 'rosaraesguima@email.io',
    id: uuidv4()
  },
  {
    nome: 'Lygia Fagundes Telles',
    telefone: 55555555,
    email: 'ligiaftelles@email.io',
    id: uuidv4()
  },
  {
    nome: 'Ariano Suassuna',
    telefone: 55555555,
    email: 'armorial.suassuna@email.io',
    id: uuidv4()
  },
  {
    nome: 'Raimundo Carrero',
    telefone: 55555555,
    email: 'carreror@email.io',
    id: uuidv4()
  },
  {
    nome: 'Lygia Bojunga Nunes',
    telefone: 55555555,
    email: 'bolsaamarela@email.io',
    id: uuidv4()
  },
  {
    nome: 'Câmara Cascudo',
    telefone: 55555555,
    email: 'ludovicus@email.io',
    id: uuidv4()
  },
  {
    nome: 'Raimundo Carrero',
    telefone: 55555555,
    email: 'carreror@email.io',
    id: uuidv4()
  },
  {
    nome: 'Lygia Bojunga Nunes',
    telefone: 55555555,
    email: 'bolsaamarela@email.io',
    id: uuidv4()
  },
  {
    nome: 'Câmara Cascudo',
    telefone: 55555555,
    email: 'ludovicus@email.io',
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
        <BotaoAdicionar />
      </ListaContainer>
    </Container>
  )
}

export default ListaDeContatos
