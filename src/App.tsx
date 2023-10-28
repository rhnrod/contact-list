import { Provider } from 'react-redux'
import BarraLateral from './container/BarraLateral'
import ListaDeContatos from './container/ListaDeContatos'
import { Container, GlobalStyle } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
