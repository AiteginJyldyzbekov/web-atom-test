"use client";
import Header from "@component/components/organisms/header";
import "../styles/globals.css";
import LayoutWrapper from "./layoutWrapper";
import { store } from "@component/store";
import { Provider } from "react-redux";
import AuthProvider from "@component/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AuthProvider>
            <LayoutWrapper>
              <Header />
              {children}
              <ToastContainer />
            </LayoutWrapper>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
