import { format } from 'date-fns'
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface Transactions {
  amount: number;
  category: string;
  id: number;
  title: string;
  type:  string;
  createdAt: string;
}


export function TransactionTable() {

  const [transactions, setTransactions] = useState<Transactions[]>([])

  function convertDate(transaction:any) {
    const createdAt = format(new Date(transaction.createdAt), 'dd/MM/yyyy') 
    return createdAt 
  }

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={ transaction.type}>R${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{convertDate(transaction)}</td>
            </tr> )
          )}
        </tbody>
      </table>
    </Container>
  )
}