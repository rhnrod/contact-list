import Contato from '../../components/Contato'
import { Container, ListaContainer } from './styles'

const ListaDeContatos = () => {
  return (
    <Container>
      <ListaContainer>
        <Contato nome="Rhuan" email="rhuan@email.io" telefone={2222222} />
        <Contato nome="Kelly" email="kelly@email.io" telefone={2222218} />
        <Contato nome="Ravi" email="ravi@email.io" telefone={2222216} />
        <Contato nome="Jorge" email="jorge@email.io" telefone={2222208} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
        <Contato nome="Felipe" email="felipe@email.io" telefone={2222203} />
      </ListaContainer>
    </Container>
  )
}

export default ListaDeContatos
