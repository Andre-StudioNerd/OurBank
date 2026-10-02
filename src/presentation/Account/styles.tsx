import styled from "styled-components";

export const Card = styled.section`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #e5e9f0 100%);
  border-radius: 8px;
  padding: 40px 48px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  align-items: start;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 250px;
    padding: 32px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 28px 24px;
    gap: 28px;
  }

  @media (max-width: 480px) {
    padding: 24px 20px;
    gap: 24px;
    border-radius: 6px;
  }
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const DateWrapper = styled.p`
  text-transform: capitalize;
  margin: 0;
  font-size: 13px;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const GreetingWrapper = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Texto = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: #000;
  text-align: justify;
`;

export const BalanceWrapper = styled.div`
  background-color: #ccc;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 8px;
`;
