import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { TransactionInput, Transaction } from "../models/transaction.model";
import { api } from "../services/api";

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api("transactions").then(
      (response: { data: { transactions: Transaction[] } }) =>
        setTransactions(response.data.transactions)
    );
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
