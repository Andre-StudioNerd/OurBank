import styled from "styled-components";
import { IconEye } from "../../../components/Icons";
import { useState } from "react";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const StyledBalance = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;

  h3 {
    font-size: clamp(18px, 2.5vw, 20px);
    line-height: 1.3;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-bottom: 2px solid #000;
    padding: 12px 0;
    margin: 0 0 16px;
  }

  h3 span {
    min-width: 0;
  }

  p {
    font-size: clamp(14px, 2vw, 16px);
    color: #000;
    margin: 0 0 12px;
  }

  strong {
    display: block;
    max-width: 100%;
    font-size: clamp(22px, 5vw, 31px);
    line-height: 1.2;
    font-weight: 600;
    color: #000000;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 18px;
      padding: 10px 0;
      margin-bottom: 14px;
    }

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }

    strong {
      font-size: 24px;
    }
  }

  @media (max-width: 400px) {
    h3 {
      gap: 8px;
    }

    strong {
      font-size: 21px;
    }
  }
`;

const IconButton = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: inherit;
  transition:
    opacity 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid #90ddff;
  }
`;

const Conta = styled.div`
  color: #000;
  font-size: 21px;
  font-weight: bold;
`;

interface BalanceProps {
  value: number;
}

export const Balance = ({ value }: BalanceProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <StyledBalance>
      <h3>
        <span>Saldo</span>

        <IconButton
          type="button"
          aria-label={isVisible ? "Ocultar saldo" : "Mostrar saldo"}
          onClick={() => setIsVisible(!isVisible)}
        >
          <IconEye />
        </IconButton>
      </h3>

      <p>Conta Corrente</p>
      <Conta>{isVisible ? formatter.format(value) : "R$ ••••••"}</Conta>
    </StyledBalance>
  );
};
