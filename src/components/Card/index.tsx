import styled from "styled-components";

export const Card = styled.div`
  background-color: #e5e9f0;
  border-radius: 8px;
  min-height: 400px;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: auto;
  padding: 32px;

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 24px;
    background-size: 40%;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 20px;
    background-size: 35%;
    border-radius: 6px;
  }
`;
