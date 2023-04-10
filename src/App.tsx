import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, serIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		serIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		serIsNewTransactionModalOpen(false);
	}

  return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
			<GlobalStyle />
		</>
	);
}

export default App
