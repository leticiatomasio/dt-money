import { Content } from "./styles";

import { SummaryItem } from "../SummaryItem/index";
import { TransactionType } from "../../models/transaction.model";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === TransactionType.Income) {
        acc.income += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
      }

      acc.total = acc.income - acc.outcome;

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Content>
      <SummaryItem
        summaryItemType="Entradas"
        summaryItemValue={summary.income}
      />
      <SummaryItem
        summaryItemType="Saídas"
        summaryItemValue={summary.outcome}
      />
      <SummaryItem summaryItemType="Total" summaryItemValue={summary.total} />
    </Content>
  );
}
