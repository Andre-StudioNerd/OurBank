import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 350px;
  max-width: 100%;
  padding: 20px;

  h2 {
    margin: 32px 0;
    font-size: 20px;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 20px;

    h2 {
      margin: 20px 0;
      font-size: 18px;
    }
  }
`;

export const FormActions = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 330px;
  height: auto;
`;

export const Figure = styled.figure`
  width: 50%;
  min-width: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Heading = styled.h2`
  margin: 32px 0;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 480px) {
    margin: 20px 0;
    font-size: 18px;
  }
`;
