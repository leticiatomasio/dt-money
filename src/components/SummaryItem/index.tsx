import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import totalImg from "../../assets/images/total.svg";

import { SummaryCard } from "./styles";

type SummaryItemProps = {
  summaryItemType: "Total" | "Entradas" | "Saídas";
  summaryItemValue: number;
};

export function SummaryItem(props: SummaryItemProps) {
  function getSummaryCardImage(summaryCardType: string) {
    switch (summaryCardType) {
      case "Entradas":
        return incomeImg;
      case "Saídas":
        return outcomeImg;
      default:
        return totalImg;
    }
  }

  return (
    <SummaryCard summaryCardType={props.summaryItemType}>
      <div className="summary-card-header">
        <p>{props.summaryItemType}</p>
        <img
          src={getSummaryCardImage(props.summaryItemType)}
          alt={props.summaryItemType}
        />
      </div>
      <div className="summary-card-value">
        <span>{props.summaryItemType === "Saídas" ? "- " : ""}</span>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.summaryItemValue)}
        </span>
      </div>
    </SummaryCard>
  );
}
