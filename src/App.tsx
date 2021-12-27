import { useState } from "react";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={openNewTransactionModal} />
    </>
  );
}

export default App;
