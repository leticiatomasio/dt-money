import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function closeNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={openNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isModalOpen={isNewTransactionModalOpen}
        onCloseModal={closeNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
