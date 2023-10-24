import { BarraLateralContainer, Wrapper } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const BarraLateral = () => {
  return (
    <BarraLateralContainer>
      <Wrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input type="text" placeholder="Buscar" />
      </Wrapper>
      <h4>Contatos: 5</h4>
    </BarraLateralContainer>
  )
}

export default BarraLateral
