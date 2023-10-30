import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BotaoRedondo } from './styles'

const BotaoAdicionar = () => (
  <>
    <BotaoRedondo to={'create-contact'}>
      <FontAwesomeIcon icon={faUserPlus} />
    </BotaoRedondo>
  </>
)

export default BotaoAdicionar
