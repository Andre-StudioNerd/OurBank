import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  background-color: #e5e9f0;
  border-radius: 8px;
  padding: 24px;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 6px;
  }
`;

export const Heading = styled.h2`
  margin: 0 0 24px;
  font-size: clamp(21px, 3vw, 25px);
  font-weight: 700;

  @media (max-width: 480px) {
    margin-bottom: 20px;
    font-size: 21px;
  }
`;

export const TransactionsList = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;

  gap: 34px;

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const MonthLabel = styled.h2`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 8px;
  border-bottom: 1px solid;
  margin: 0 0 16px;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 12px;
  }
`;
