import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BotaoRedondo } from './styles'

const BotaoAdicionar = () => (
  <>
    <BotaoRedondo>
      <FontAwesomeIcon icon={faUserPlus} />
    </BotaoRedondo>
  </>
)

export default BotaoAdicionar
