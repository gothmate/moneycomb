import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';


interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
	const [type, setType] = useState('deposit')
	const [title, setTitle] = useState('')
	const [category, setCategory] = useState('')
	const [valor, setValor] = useState(0)

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()
		const data = {
			title,
			type,
			category,
			valor
		}

		api.post('/transactions', data)
	}
	
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<Container onSubmit={handleCreateNewTransaction}>
				<header>
					<h2>Cadastrar transação</h2>
					<button
						type='button'
						onClick={onRequestClose}
						className='react-modal-close'
					>
						<img src={closeImg} alt='close' />
					</button>
				</header>
				<input 
					type='text' 
					placeholder='Título' 
					value={title} 
					onChange={event => setTitle(event.target.value)} 
				/>
				<input 
					type='number' 
					placeholder='Valor' 
					value={valor} 
					onChange={event => setValor(Number(event.target.value))} 
				/>
				<TransactionTypeContainer>
					<RadioBox
						type='button'
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor='var(--green-light)'
					>
						<img src={incomeImg} alt='income' /> Entrada
					</RadioBox>
					<RadioBox
						type='button'
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor='var(--red-light)'
					>
						<img src={outcomeImg} alt='outcome' />
						Saída
					</RadioBox>
				</TransactionTypeContainer>
				<input 
					type='text' 
					placeholder='Categoria' 
					value={category}
					onChange={event => setCategory(event.target.value)}
				/>
				<button className='cad' type='submit'>
					Cadastrar
				</button>
			</Container>
		</Modal>
	);
}