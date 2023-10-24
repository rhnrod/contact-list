import BarraLateral from './container/BarraLateral'
import ListaDeContatos from './container/ListaDeContatos'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BarraLateral />
      <ListaDeContatos />
    </Container>
  )
}

export default App
