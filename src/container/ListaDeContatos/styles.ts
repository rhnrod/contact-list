import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 620px;
  padding-left: 40px;
  padding-top: 120px;
  user-select: none;
`

export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
`

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .icon {
    height: 32px;
  }
`
