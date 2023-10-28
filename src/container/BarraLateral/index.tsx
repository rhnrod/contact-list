import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown19,
  faArrowDown91,
  faArrowDownAZ,
  faArrowDownZA,
  faMagnifyingGlass,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import BotaoFiltro from '../../components/BotaoFIltros'
import { BarraLateralContainer, Titulo, Wrapper } from './styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <BarraLateralContainer>
      <Titulo>
        <FontAwesomeIcon icon={faPhone} className="iconPhone" /> CallMe Maybe
      </Titulo>
      <Wrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </Wrapper>
      <BotaoFiltro ativo icon={faArrowDownAZ} text="Nomes: A a Z" />
      <BotaoFiltro icon={faArrowDownZA} text="Nomes: Z a A" />
      <BotaoFiltro icon={faArrowDown19} text="Números: crescente" />
      <BotaoFiltro icon={faArrowDown91} text="Números: decrescente" />
    </BarraLateralContainer>
  )
}

export default BarraLateral
