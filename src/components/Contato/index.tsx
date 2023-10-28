import Avatar from 'boring-avatars'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

import { remover } from '../../store/reducers/contatos'
import { variaveis } from '../../styles/variaveis'
import { ContactCard, Info } from './styles'
import ContatoClass from '../../models/Contato'

export type Contact = ContatoClass

const Contato = ({ nome, email, telefone, id }: Contact) => {
  const dispatch = useDispatch()

  return (
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
      <Info key={id}>
        <h3>{nome}</h3>
        <h4>{email}</h4>
        <h5>+55 (55) {telefone}</h5>
      </Info>
      <FontAwesomeIcon icon={faPenToSquare} className="edit" />
      <FontAwesomeIcon
        icon={faTrash}
        className="editTrash"
        onClick={() => dispatch(remover(id))}
      />
    </ContactCard>
  )
}

export default Contato
