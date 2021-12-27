import { Content } from "./styles";

import { TransactionType } from "../../models/transaction.model";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  function getTransactionType(transactionType: TransactionType) {
    switch (transactionType) {
      case TransactionType.Income:
        return "income";
      case TransactionType.Outcome:
        return "outcome";
    }
  }

  return (
    <Content>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={getTransactionType(transaction.type)}>
                <span>
                  {transaction.type === TransactionType.Outcome ? "- " : ""}
                </span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </span>
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
}
