import Avatar from 'boring-avatars'
import { ContactCard } from './styles'
import { variaveis } from '../../styles/variaveis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

type Contact = {
  nome: string
  email: string
  telefone: number
}

const avatarSize = 80

const Contato = ({ nome, email, telefone }: Contact) => (
  <ContactCard>
    <Avatar
      variant="beam"
      size={avatarSize}
      name={nome}
      colors={[
        variaveis.avatarYellow,
        variaveis.avatarOrange,
        variaveis.avatarPink,
        variaveis.avatarGreen,
        variaveis.avatarBlue
      ]}
    />
    <div>
      <h3>{nome}</h3>
      <p>{email}</p>
      <p>+55 {telefone}</p>
    </div>
    <FontAwesomeIcon icon={faPenToSquare} className="edit" />
  </ContactCard>
)

export default Contato
