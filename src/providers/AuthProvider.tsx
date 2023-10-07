import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@component/helpers/ReduxHooks";
import { login } from "@component/store/slices";
import { useRouter } from "next/navigation";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.isAuth);

  useEffect(() => {
    const authTokenCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("authToken="));

    if (authTokenCookie) {
      const token = authTokenCookie.split("=")[1];
      dispatch(login(token));
    }else if(!authTokenCookie && !isAuth){
      router.push("/sign-in")
    }
  }, [isAuth]);

  return <>{children}</>;
};

export default AuthProvider;
