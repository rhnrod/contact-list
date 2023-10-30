import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Botao } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import * as enums from '../../utils/enums/Contato'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  ativo?: boolean
  icon: IconProp
  text: string
  criterio: 'nome' | 'numero' | 'todas'
  valor: enums.BuscaNumerica | enums.OrdemAlfabetica
}

const BotaoFiltro = ({ icon, text, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    const result = mesmoCriterio && mesmoValor

    if (criterio === 'todas' && valor === enums.OrdemAlfabetica.CRESCENTE) {
      return result
    } else {
      return result
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaAtivo()

  return (
    <>
      <Botao ativo={ativo} onClick={filtrar}>
        <FontAwesomeIcon icon={icon} /> {text}
      </Botao>
    </>
  )
}

export default BotaoFiltro
