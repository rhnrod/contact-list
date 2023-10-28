import Avatar from 'boring-avatars'
import { ContactCard, Info } from './styles'
import { variaveis } from '../../styles/variaveis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export type Contact = {
  nome: string
  email: string
  telefone: number
  id: string
}

const avatarSize = 80

const Contato = ({ nome, email, telefone, id }: Contact) => (
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
    <Info key={id}>
      <h3>{nome}</h3>
      <h5>{email}</h5>
      <h5>+55 (55) {telefone}</h5>
    </Info>
    <FontAwesomeIcon icon={faPenToSquare} className="edit" />
  </ContactCard>
)

export default Contato
