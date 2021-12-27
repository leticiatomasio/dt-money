import styled from "styled-components";

type SummaryCardProps = {
  summaryCardType: "Total" | "Entradas" | "Saídas";
};

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) =>
    props.summaryCardType === "Total" ? "var(--green)" : "var(--shape)"};
  color: ${(props) =>
    props.summaryCardType === "Total" ? "#fff" : "var(--text-title)"};
  height: 8.5rem;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .summary-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .summary-card-value {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 500;
  }
`;
