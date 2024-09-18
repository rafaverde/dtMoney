import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors["gray-800"]};
  border-radius: 8px;

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;

      background-color: ${({ theme }) => theme.colors["gray-900"]};
      color: ${({ theme }) => theme.colors["gray-300"]};

      border: 0;
      border-radius: 8px;

      &::placeholder {
        color: ${({ theme }) => theme.colors["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;

      background-color: ${({ theme }) => theme.colors["green-500"]};
      color: ${({ theme }) => theme.colors.white};

      border: 0;
      border-radius: 8px;

      font-weight: bold;

      cursor: pointer;
      transition: all 200ms;

      &:hover {
        background-color: ${({ theme }) => theme.colors["green-700"]};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  display: flex;
  align-items: center;

  background-color: transparent;
  color: ${({ theme }) => theme.colors["gray-500"]};

  border: none;
  cursor: pointer;
  transition: color 200ms;

  &:hover {
    color: ${({ theme }) => theme.colors["red-500"]};
  }
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  $variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors["gray-700"]};
  color: ${({ theme }) => theme.colors["gray-300"]};

  border: 0;
  border-radius: 8px;

  cursor: pointer;
  transition: background 200ms;

  svg {
    color: ${(props) =>
      props.$variant === "income"
        ? props.theme.colors["green-300"]
        : props.theme.colors["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme.colors["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${(props) =>
      props.$variant === "income"
        ? props.theme.colors["green-500"]
        : props.theme.colors["red-500"]};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
