import Contato from '../../components/Contato'
import { Container, ListaContainer, Titulo } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const ListaDeContatos = () => {
  return (
    <Container>
      <Titulo>
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <h1>CallMe Maybe</h1>
      </Titulo>
      <ListaContainer>
        <Contato nome="Rhuan" email="rhuan@email.io" telefone={2222222} />
        <Contato nome="Kelly" email="kelly@email.io" telefone={2222218} />
        <Contato nome="Ravi" email="ravi@email.io" telefone={2222216} />
        <Contato nome="Jorge" email="jorge@email.io" telefone={2222208} />
        <Contato
          nome="Felipe Melo"
          email="felipe@email.io"
          telefone={2222203}
        />
        <Contato
          nome="Felipe Lima"
          email="felipe@email.io"
          telefone={2222203}
        />
        <Contato nome="Filipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Phelipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Lipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felippe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Philip" email="felipe@email.io" telefone={2222203} />
      </ListaContainer>
    </Container>
  )
}

export default ListaDeContatos
