import styled from "styled-components"

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;

  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;

    background-color: ${({ theme }) => theme.colors["gray-700"]};

    &:first-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`

interface PriceHighlightProps {
  $variant: "income" | "outcome"
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.$variant === "income"
      ? props.theme.colors["green-300"]
      : props.theme.colors["red-300"]};
`
