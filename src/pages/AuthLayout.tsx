import { Outlet } from "react-router";
import { Card as BaseCard } from "../components/Card";
import styled from "styled-components";

const Card = styled(BaseCard)`
  display: flex;
  gap: 16px;

  width: 100%;
  min-width: 0;
  max-width: 100%;

  margin: 24px auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    margin: 16px auto;
    padding: 24px;
  }

  @media (max-width: 600px) {
    gap: 20px;
    margin: 12px auto;
    padding: 20px;
  }
`;

const AuthLayout = () => {
  return (
    <Card>
      <Outlet />
    </Card>
  );
};

export default AuthLayout;
