import { useAppSelector } from "@component/helpers/ReduxHooks";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export default async function middleware() {
  const isAuth = useAppSelector((state) => state.isAuth);
  console.log(isAuth);
  if (!isAuth) {
    return {
      redirect: {
        destination: "/sign-in", // Укажите свой URL для страницы входа
        permanent: false, // Если это временное перенаправление
      },
    };
  }

  return {};
}

export const config = {
  matcher: "/sign-in",
};
