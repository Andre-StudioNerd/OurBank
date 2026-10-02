import styled from "styled-components";

export const Heading = styled.h2`
  margin: 0;

  font-size: clamp(21px, 3vw, 25px);
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: stretch;
  width: 300px;
  max-width: 100%;
  min-width: 0;

  fieldset {
    width: 100%;
    min-width: 0;
    border: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;
