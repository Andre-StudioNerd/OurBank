import styled from "styled-components";

export const TransactionWrapper = styled.article`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TransactionType = styled.h3`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 600;
  overflow-wrap: break-word;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const TransactionDate = styled.time`
  font-size: 13px;
  color: #581825;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TransactionAmount = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const TransactionInfo = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;
