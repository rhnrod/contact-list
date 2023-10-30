import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      {
        nome: 'Rhuan',
        email: 'rhuan@email.io',
        telefone: 967785451,
        id: uuidv4()
      },
      {
        nome: 'Kelly',
        email: 'kellyn@email.io',
        telefone: 986591133,
        id: uuidv4()
      },
      {
        nome: 'Ravi',
        email: 'ravi@email.io',
        telefone: 985357033,
        id: uuidv4()
      },

      {
        nome: 'Will',
        email: 'will@email.io',
        telefone: 992809257,
        id: uuidv4()
      },
      {
        nome: 'Luciana',
        email: 'luciana@email.io',
        telefone: 993647252,
        id: uuidv4()
      },
      {
        nome: 'Noah',
        email: 'noah@email.io',
        telefone: 968574734,
        id: uuidv4()
      },
      {
        nome: 'Felipe',
        email: 'felipe@email.io',
        telefone: 979856237,
        id: uuidv4()
      },
      {
        nome: 'Yasmin',
        email: 'yasmin@email.io',
        telefone: 971128878,
        id: uuidv4()
      },
      {
        nome: 'Mateus',
        email: 'mateus@email.io',
        telefone: 996322721,
        id: uuidv4()
      },
      {
        nome: 'Jorge',
        email: 'jorge@email.io',
        telefone: 997505127,
        id: uuidv4()
      },
      {
        nome: 'Saozinha',
        email: 'saozinha@email.io',
        telefone: 969884168,
        id: uuidv4()
      },
      {
        nome: 'Cesiane',
        email: 'cesiane@email.io',
        telefone: 975188213,
        id: uuidv4()
      }
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      if (
        confirm(`Deseja remover este contato?\nP.S: Esta ação é irreversível.`)
      ) {
        state.itens = state.itens.filter(
          (contato) => contato.id !== action.payload
        )
      }
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
