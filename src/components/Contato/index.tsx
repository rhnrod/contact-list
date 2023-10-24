import Avatar from 'boring-avatars'
import { ContactCard } from './styles'
import { variaveis } from '../../styles/variaveis'

type Contact = {
  nome: string
  email: string
  telefone: number
}
const Contato = ({ nome, email, telefone }: Contact) => (
  <ContactCard>
    <Avatar
      variant="beam"
      size={80}
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
  </ContactCard>
)

export default Contato
