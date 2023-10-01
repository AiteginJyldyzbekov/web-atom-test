"use client";
import { useAppSelector } from "@component/helpers/ReduxHooks";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.isAuth);

  if (isAuth) {
    return (
      <Button sx={{ mt: 2 }} onClick={() => router.back()}>
        <ArrowBackIcon sx={{ mr: 1 }} />
        Назад
      </Button>
    );
  }
};
export default BackBtn;
