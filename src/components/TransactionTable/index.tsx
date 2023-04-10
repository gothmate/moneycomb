import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr> 
          <tr>
            <td>Pagamento do Aluguel</td>
            <td className="withdraw">-R$1.500,00</td>
            <td>Casa</td>
            <td>05/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}