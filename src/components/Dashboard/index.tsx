import { Container } from "./styles";

import { TransactionsTable } from "../TransactionsTable/index";

export function Dashboard() {
  return (
    <Container>
      <TransactionsTable />
    </Container>
  );
}
