import { useState } from 'react'
import { Nav, NavLinks, Pages } from './styles'

interface Pagination {
  paginate: (number: number) => number | void
  contactsPerPage: number
  totalContacts: number
}

const Paginacao = ({
  contactsPerPage,
  totalContacts,
  paginate
}: Pagination) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i)
  }

  const [activePage, setActivePage] = useState(1)

  const handlePageClick = (number: number) => {
    setActivePage(number)
    paginate(number)
  }

  return (
    <Nav>
      <NavLinks>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => {
              handlePageClick(number)
              paginate(number)
            }}
          >
            <Pages className={`${activePage === number ? 'ativo' : ''}`}>
              {number}
            </Pages>
          </li>
        ))}
      </NavLinks>
    </Nav>
  )
}
export default Paginacao
