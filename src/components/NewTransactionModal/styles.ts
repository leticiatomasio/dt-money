import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  input {
    background: #e7e9ee;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;
    padding: 0 1.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    height: 4rem;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    border: 4rem;
    border-radius: 0.25rem;
    margin-top: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

type TransactionTypeButtonProps = {
  isActive: boolean;
  activeColor: "green" | "red";
};

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  height: 4rem;
  border: ${(props) => (props.isActive ? "0" : "1px solid #d7d7d7")};
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
