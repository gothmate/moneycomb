import { Container, Outcome, Income } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";
import { useContext, useState } from "react";


export function Summary() {

  const {transactions} = useContext(TransactionsContext)
  
  const totalDeposits = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'deposit') {
      return acc + transaction.amount
    }
    return acc
  }, 0)
  
  const totalWithdraw = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'withdraw') {
      return acc + transaction.amount
    }
    return acc
  }, 0)

  return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt='income' />
				</header>
				<Income>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(totalDeposits)}
				</Income>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt='income' />
				</header>
				<Outcome>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(totalWithdraw)}
				</Outcome>
			</div>
			<div className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={totalImg} alt='total' />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(totalDeposits - totalWithdraw)}
				</strong>
			</div>
		</Container>
	);
}