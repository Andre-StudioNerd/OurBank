import styled from "styled-components";
import { IconEye } from "../../../../components/Icons";
import { useState } from "react";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const investments = [
  { month: "Jan", value: 500 },
  { month: "Fev", value: 800 },
  { month: "Mar", value: 1200 },
  { month: "Abr", value: 1500 },
  { month: "Mai", value: 1900 },
  { month: "Jun", value: 2400 },
];

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
    color: #444444;
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

const Chart = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid #000;
`;

const BarWrapper = styled.div`
  height: 100%;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const Bar = styled.div<{ $height: number }>`
  width: 100%;
  max-width: 45px;
  height: ${(props) => props.$height}%;
  min-height: 4px;
  background-color: #0b1b3d;
  border-radius: 6px 6px 0 0;
  transition: height 0.3s ease;

  &:hover {
    background-color: #581825;
  }
`;

const Month = styled.span`
  font-size: 12px;
  color: #444;
`;

export const BalanceWrapper = styled.div`
  background-color: #ccc;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 8px;
`;

interface BalanceProps {
  value: number;
}

export const Invest = ({ value }: BalanceProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const maxValue = Math.max(...investments.map((item) => item.value));

  return (
    <StyledBalance>
      <BalanceWrapper>
        <h3>
          <span>Extrato</span>

          <IconButton
            type="button"
            aria-label={isVisible ? "Ocultar saldo" : "Mostrar saldo"}
            onClick={() => setIsVisible(!isVisible)}
          >
            <IconEye />
          </IconButton>
        </h3>

        <p>Investimento Total do mês</p>

        <strong>{isVisible ? formatter.format(value) : "R$ ••••••"}</strong>

        {isVisible && (
          <Chart>
            {investments.map((investment) => {
              const height = (investment.value / maxValue) * 100;

              return (
                <BarWrapper key={investment.month}>
                  <Bar
                    $height={height}
                    title={formatter.format(investment.value)}
                  />
                  <Month>{investment.month}</Month>
                </BarWrapper>
              );
            })}
          </Chart>
        )}
      </BalanceWrapper>
    </StyledBalance>
  );
};
