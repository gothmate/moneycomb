import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container>	
				<header>
					<h2>Cadastrar transação</h2>
					<button type="button" onClick={onRequestClose} className="react-modal-close">
						<img src={closeImg} alt='close' />
					</button>
				</header>
				<input type='text' placeholder='Título' />
				<input type='number' placeholder='Valor' />
				<TransactionTypeContainer>
					<button type='button'>
						<img src={incomeImg} alt='income' /> Entrada
					</button>
					<button type='button'>
						<img src={outcomeImg} alt='outcome' />
						Saída
					</button>
				</TransactionTypeContainer>
				<input type='text' placeholder='Categoria' />
				<button className='cad' type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}