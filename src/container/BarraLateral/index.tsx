import { BarraLateralContainer, Titulo, Wrapper } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons'
import BotaoFiltro from '../../components/BotaoFIltros'
const BarraLateral = () => {
  return (
    <BarraLateralContainer>
      <Titulo>
        <FontAwesomeIcon icon={faPhone} className="iconPhone" /> CallMe Maybe
      </Titulo>
      <Wrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input type="text" placeholder="Buscar" />
      </Wrapper>
      <BotaoFiltro />
    </BarraLateralContainer>
  )
}

export default BarraLateral
