import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 1120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  padding-left: 40px;
  user-select: none;

  overflow-y: scroll;
`

export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
`
