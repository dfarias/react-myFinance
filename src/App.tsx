import { useState } from 'react'

import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { NewTransactionModal } from './components/NewTransacationModal'
import { TransactionsProvider } from './hooks/useTransactions'

import { GlobalStyle } from "./styles/global"

export function App() {

  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setNewTransactionModalIsOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalIsOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
          isOpen={newTransactionModalIsOpen}
          onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </TransactionsProvider>
  )
}