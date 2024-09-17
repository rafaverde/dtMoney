import styled from "styled-components"

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme.colors["gray-900"]};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  background: ${({ theme }) => theme.colors["green-500"]};
  color: ${({ theme }) => theme.colors.white};

  border: 0;
  border-radius: 8px;

  font-weight: bold;
  cursor: pointer;

  transition: all 300ms;

  &:hover {
    background: ${({ theme }) => theme.colors["green-700"]};
  }
`
