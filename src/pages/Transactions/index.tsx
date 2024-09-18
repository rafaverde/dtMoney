import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"

import { Header } from "../../components/Header"
import { SearchForm } from "../../components/SearchForm"
import { Summary } from "../../components/Summary"
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles"

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td width="25%">
                  <PriceHighlight $variant={transaction.type}>
                    {`R$ ${transaction.price.toFixed(2).replace(".", ",")}`}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
