import { BarraLateralContainer, Wrapper } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BotaoFiltro from '../../components/BotaFIltros'
const BarraLateral = () => {
  return (
    <BarraLateralContainer>
      <Wrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input type="text" placeholder="Buscar" />
      </Wrapper>
      <BotaoFiltro />
    </BarraLateralContainer>
  )
}

export default BarraLateral
