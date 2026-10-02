import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 0;

  display: grid;
  grid-template-columns: 200px minmax(0, 1fr) 285px;
  gap: 24px;

  /* iPad */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* Celular */
  @media (max-width: 600px) {
    gap: 16px;
  }
`;
