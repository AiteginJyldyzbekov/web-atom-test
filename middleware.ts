import { useAppSelector } from "@component/helpers/ReduxHooks";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export default async function middleware() {
  const isAuth = useAppSelector((state) => state.isAuth);
  if (!isAuth) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false, 
      },
    };
  }

  return {};
}

export const config = {
  matcher: "/sign-in",
};
