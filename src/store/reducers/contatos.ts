import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      {
        nome: 'Rhuan',
        email: 'rhuan@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Kelly',
        email: 'kellyn@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Ravi',
        email: 'ravi@email.io',
        telefone: 999999999,
        id: uuidv4()
      },

      {
        nome: 'Will',
        email: 'will@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Luciana',
        email: 'luciana@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Noah',
        email: 'noah@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Felipe',
        email: 'felipe@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Yasmin',
        email: 'yasmin@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Mateus',
        email: 'mateus@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Jorge',
        email: 'jorge@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Saozinha',
        email: 'saozinha@email.io',
        telefone: 999999999,
        id: uuidv4()
      },
      {
        nome: 'Cesiane',
        email: 'cesiane@email.io',
        telefone: 999999999,
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
