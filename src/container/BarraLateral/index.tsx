import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown19,
  faArrowDown91,
  faArrowDownAZ,
  faArrowDownZA,
  faCircleLeft,
  faMagnifyingGlass,
  faPhone,
  faUsersRectangle
} from '@fortawesome/free-solid-svg-icons'
import BotaoFiltro from '../../components/BotaoFIltros'
import {
  BarraLateralContainer,
  BotaoVoltar,
  LinkWrapper,
  Titulo,
  Wrapper
} from './styles'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Contato'

type Props = {
  mostrarFiltros?: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <BarraLateralContainer>
      <Titulo>
        <FontAwesomeIcon icon={faPhone} className="iconPhone" /> CallMe Maybe
      </Titulo>
      {mostrarFiltros ? (
        <>
          <Wrapper>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <input
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
          </Wrapper>
          <BotaoFiltro
            valor={enums.OrdemAlfabetica.CRESCENTE}
            criterio="todas"
            icon={faUsersRectangle}
            text="Ordem de adição"
            ativo
          />
          <BotaoFiltro
            valor={enums.OrdemAlfabetica.CRESCENTE}
            criterio="nome"
            icon={faArrowDownAZ}
            text="Nomes: A a Z"
          />
          <BotaoFiltro
            valor={enums.OrdemAlfabetica.DECRESCENTE}
            criterio="nome"
            icon={faArrowDownZA}
            text="Nomes: Z a A"
          />
          <BotaoFiltro
            valor={enums.BuscaNumerica.CRESCENTE}
            criterio="numero"
            icon={faArrowDown19}
            text="Números: crescente"
          />
          <BotaoFiltro
            valor={enums.BuscaNumerica.DECRESCENTE}
            criterio="numero"
            icon={faArrowDown91}
            text="Números: decrescente"
          />
        </>
      ) : (
        <LinkWrapper>
          <BotaoVoltar to={'/'}>
            <FontAwesomeIcon icon={faCircleLeft} /> Voltar
          </BotaoVoltar>
        </LinkWrapper>
      )}
    </BarraLateralContainer>
  )
}

export default BarraLateral
