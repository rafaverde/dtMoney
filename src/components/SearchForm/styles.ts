import styled from "styled-components"

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;

    border: 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors["gray-900"]};
    color: ${({ theme }) => theme.colors["gray-300"]};

    &::placeholder {
      color: ${({ theme }) => theme.colors["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;

    background-color: transparent;
    color: ${({ theme }) => theme.colors["green-300"]};

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors["green-300"]};

    font-weight: bold;

    cursor: pointer;
    transition: all 200ms;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors["green-500"]};
      color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors["green-500"]};
    }
  }
`
