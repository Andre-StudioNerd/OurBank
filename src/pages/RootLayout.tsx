import styled from "styled-components";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../app/context/AuthContext";
import { Header } from "../presentation/Header";
import { Footer } from "../presentation/Footer";

const Container = styled.div`
  display: flex;
  gap: 24px;

  width: min(1200px, calc(100% - 48px));
  min-width: 0;

  margin: 24px auto;

  @media (max-width: 1024px) {
    width: calc(100% - 32px);
    margin: 16px auto;
    gap: 20px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 24px);
    margin: 12px auto;
    gap: 16px;
  }
`;

const RootLayout = () => {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" autoClose={9000} />

      <Header />

      <Container>
        <Outlet />
      </Container>
      <Footer />
    </AuthProvider>
  );
};

export default RootLayout;
