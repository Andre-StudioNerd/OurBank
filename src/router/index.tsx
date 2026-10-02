import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout";
import AuthLayout from "../pages/AuthLayout";
import { GuestRoute } from "../components/GuestRoute";
import { RootRedirect } from "../pages/RootRedirect";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoute } from "../pages/ProtectedRoute";
import { Transferencia } from "../presentation/Account/Transf";
import { Investimento } from "../presentation/Account/Invest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <RootRedirect />,
      },

      {
        path: "home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },

      {
        path: "transferencias",
        element: (
          <ProtectedRoute>
            <Transferencia />
          </ProtectedRoute>
        ),
      },

      {
        path: "investimentos",
        element: (
          <ProtectedRoute>
            <Investimento />
          </ProtectedRoute>
        ),
      },

      {
        path: "auth",
        element: (
          <GuestRoute>
            <AuthLayout />
          </GuestRoute>
        ),
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);
