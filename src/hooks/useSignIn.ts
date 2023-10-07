import { useAppDispatch } from "@component/helpers/ReduxHooks";
import { notification } from "@component/helpers/notification";
import userService from "@component/controllers/user.service";
import { login } from "@component/store/slices";
import { useSignInProps } from "@component/types/serviceTypes/AuthTypes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function useSignIn() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { mutate } = useMutation(
    ["sign in"],
    ({ email, password }: useSignInProps) =>
      userService
        .signIn(email, password)
        .then((res) => {
          dispatch(login(res.data.token));
          document.cookie = `authToken=${res.data.token}`;
          router.push("/");
          notification("Вы успешно вошли в систему", "success");
        })
        .catch(() => {
          notification("Не правильный логин или пароль", "error");
        })
  );
  const signIn = async ({ email, password }: useSignInProps) => {
    mutate({ email, password });
  };

  return { signIn };
}
