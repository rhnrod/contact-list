import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Botao } from './styles'

export type Props = {
  ativo?: boolean
  icon: IconProp
  text: string
}

const BotaoFiltro = ({ ativo, icon, text }: Props) => {
  return (
    <>
      <Botao ativo={ativo}>
        <FontAwesomeIcon icon={icon} /> {text}
      </Botao>
    </>
  )
}

export default BotaoFiltro
