import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDownAZ,
  faArrowDownZA,
  faArrowDown19,
  faArrowDown91
} from '@fortawesome/free-solid-svg-icons'
import { Botao, Title } from './styles'
import { useState } from 'react'

const BotaoFiltro = () => {
  const [isAtoZ, setIsAtoZ] = useState(true)
  const [is1to9, setIs1to9] = useState(true)

  function changeDisplayOrder() {
    return setIsAtoZ(!isAtoZ)
  }

  function changeDisplayNumberOrder() {
    return setIs1to9(!is1to9)
  }

  return (
    <>
      <Title>Filtros</Title>
      {isAtoZ ? (
        <Botao onClick={changeDisplayOrder}>
          <FontAwesomeIcon icon={faArrowDownAZ} /> Ordem crescente
        </Botao>
      ) : (
        <Botao onClick={changeDisplayOrder}>
          <FontAwesomeIcon icon={faArrowDownZA} /> Ordem decrescente
        </Botao>
      )}{' '}
      {is1to9 ? (
        <Botao onClick={changeDisplayNumberOrder}>
          <FontAwesomeIcon icon={faArrowDown19} /> Ordem crescente
        </Botao>
      ) : (
        <Botao onClick={changeDisplayNumberOrder}>
          <FontAwesomeIcon icon={faArrowDown91} /> Ordem decrescente
        </Botao>
      )}{' '}
    </>
  )
}

export default BotaoFiltro
