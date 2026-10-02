import styled from "styled-components";

export const Aside = styled.aside`
  width: 100%;
  min-width: 0;
  max-width: 240px;
  background-color: #e5e9f0;
  border-radius: 8px;
  padding: 32px;

  @media (max-width: 1024px) {
    max-width: 200px;
    padding: 24px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const List = styled.ul`
  width: 100%;
  min-width: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    gap: 12px 20px;
  }

  @media (max-width: 480px) {
    gap: 10px 16px;
  }
`;

interface ListItemProps {
  $active?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  text-align: center;
  border-bottom: 1px solid;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  padding-bottom: 16px;

  @media (max-width: 768px) {
    padding-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  color: inherit;
  font-weight: inherit;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    color: #fff;
    background-color: #1a4b5e;
    padding: 5px;
  }
`;
