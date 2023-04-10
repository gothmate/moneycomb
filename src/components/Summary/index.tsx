import { Container, Outcome, Income } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income" />
        </header>
        <Income>R$12.000,00</Income>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="income" />
        </header>
        <Outcome>R$1.500,00</Outcome>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$10.500,00</strong>
      </div>
    </Container>
  )
}