import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1a4b5e;
  width: 100%;
  padding: 30px 0;

  @media (max-width: 1024px) {
    padding: 24px 0;
  }

  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

export const Container = styled.section`
  width: min(1200px, calc(100% - 48px));
  min-width: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 1024px) {
    width: calc(100% - 32px);
    gap: 16px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 24px);
    flex-direction: column;
    gap: 20px;
  }
`;

export const List = styled.ul`
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 40px;

  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const ListItem = styled.li`
  font-size: 18px;
  color: #cbcbcb;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Texto = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: #fff;
  text-align: justify;
`;
