import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import { TransactionsContext } from '../../TransactionsContext';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
	const { createTransaction } = useContext(TransactionsContext)
	const [type, setType] = useState('deposit')
	const [title, setTitle] = useState('')
	const [category, setCategory] = useState('')
	const [amount, setAmount] = useState(0)

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()
		await createTransaction({
			title,
			amount,
			category,
			type,
		});

		setTitle('')
		setAmount(0)
		setCategory('')
		setType('deposit')
		onRequestClose()
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
					value={amount} 
					onChange={event => setAmount(Number(event.target.value))} 
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