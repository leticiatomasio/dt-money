import styled from "styled-components";

export const Content = styled.section`
  width: 100%;

  p {
    color: var(--text-body);
    font-size: 1rem;
    text-align: center;
    margin-top: 5rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
    }

    td {
      color: var(--text-body);
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
    }
  }
`;
