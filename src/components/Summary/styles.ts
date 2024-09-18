import styled, { css } from "styled-components"

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: -5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  $variant?: "dark-green"
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors["gray-700"]};

  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.$variant === "dark-green" &&
    css`
      background-color: ${props.theme.colors["green-700"]};
    `}
`
