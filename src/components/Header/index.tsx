import logoImg from "../../assets/images/logo.svg";

import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
