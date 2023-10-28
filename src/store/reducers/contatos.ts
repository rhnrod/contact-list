import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import { v4 as uuidv4 } from 'uuid'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Rhuan', 'rhuan@email.io', 999999999, uuidv4()),
    new Contato('Kelly', 'kelly@email.io', 999999999, uuidv4()),
    new Contato('Ravi', 'ravi@email.io', 999999999, uuidv4()),
    new Contato('Jorge', 'rhuan@email.io', 999999999, uuidv4()),
    new Contato('Sãozinha', 'rhuan@email.io', 999999999, uuidv4()),
    new Contato('Will', 'kelly@email.io', 999999999, uuidv4()),
    new Contato('Luciana', 'ravi@email.io', 999999999, uuidv4()),
    new Contato('Noah', 'rhuan@email.io', 999999999, uuidv4()),
    new Contato('Felipe', 'rhuan@email.io', 999999999, uuidv4()),
    new Contato('Mateus', 'kelly@email.io', 999999999, uuidv4()),
    new Contato('Cesiane', 'ravi@email.io', 999999999, uuidv4()),
    new Contato('Júnior', 'rhuan@email.io', 999999999, uuidv4())
  ],
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
