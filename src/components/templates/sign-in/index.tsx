"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./SignIn.module.scss";
import { Button, Typography } from "@mui/material";
import { useSignIn } from "@component/hooks/useSignIn";
import { useRouter } from "next/navigation";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signIn } = useSignIn();
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn({ email, password }).then(() => {
      router.push("/");
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Авторизация c Email и Пароль
        </Typography>
        <form onSubmit={submit}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ height: 60 }}>
            Войти
          </Button>
        </form>
      </div>
      <div className={styles.right} />
    </div>
  );
}

export default SignIn;
