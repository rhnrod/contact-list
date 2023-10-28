import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo: string
  criterio: 'nome' | 'numero' | 'email' | 'todas'
  valor?: enums.OrdemAlfabetica | enums.BuscaNumerica
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas',
  valor: enums.OrdemAlfabetica.CRESCENTE
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraOrdemAlfabetica: (
      state,
      action: PayloadAction<enums.OrdemAlfabetica>
    ) => {
      if (action.payload === enums.OrdemAlfabetica.CRESCENTE) {
        state.valor = enums.OrdemAlfabetica.CRESCENTE
      } else {
        state.valor = enums.OrdemAlfabetica.DECRESCENTE
      }
    }
  }
})

export const { alteraTermo, alteraOrdemAlfabetica } = filtroSlice.actions
export default filtroSlice.reducer
