import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";
import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { TransactionType } from "../../models/transaction.model";
import {
  Container,
  TransactionTypeContainer,
  TransactionTypeButton,
} from "./styles";

type NewTransactionModalProps = {
  onCloseModal: () => void;
  isModalOpen: boolean;
};

Modal.setAppElement("#root");

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState(TransactionType.Income);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType(TransactionType.Income);

    props.onCloseModal();
  }

  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.onCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          min={1}
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            onClick={() => setType(TransactionType.Income)}
            isActive={type === TransactionType.Income}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            onClick={() => setType(TransactionType.Outcome)}
            isActive={type === TransactionType.Outcome}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
