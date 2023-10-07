import { useAppDispatch, useAppSelector } from "@component/helpers/ReduxHooks";
import userService from "@component/services/user.service";
import { login } from "@component/store/slices";
import { useSignInProps } from "@component/types/serviceTypes/AuthTypes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useSignIn() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.isAuth);
  const { mutate } = useMutation(
    ["sign in"],
    ({ email, password }: useSignInProps) =>
      userService
        .signIn(email, password)
        .then((res) => {
          dispatch(login(res.data.token));
          document.cookie = `authToken=${res.data.token}`;
          router.push("/");
          
        })
        .catch(() => {
          alert("error");
        })
  );
  const signIn = async ({ email, password }: useSignInProps) => {
    mutate({ email, password });
  };

  return { signIn };
}
