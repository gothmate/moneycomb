import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	header {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	input {
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		color: var(--text-title);
		background: #e7e9ee;
		border: 1px solid #d7d7d7;
		height: 4rem;

		::placeholder {
			color: var(--text-body);
		}
	}

	button {
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		border-radius: 5px;
	}

	.cad {
		background: var(--green);
		color: var(--shape);
		height: 4rem;
		transition: 200ms ease-in-out;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 1fr;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
	height: 4rem;
	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;
  
	background: ${(props) => props.isActive ? props.activeColor : 'transparent'};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	transition: 200ms ease-in-out;

	&:hover {
		border-color: ${darken(0.1, '#d7d7d7')};
	}

	img {
		width: 20px;
	}
`;

