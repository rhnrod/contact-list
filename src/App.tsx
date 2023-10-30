import { Provider } from 'react-redux'
import { Container, GlobalStyle } from './styles'

import store from './store'
import Home from './pages/Home'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </Provider>
  )
}

export default App
