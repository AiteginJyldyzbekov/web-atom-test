"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PageTitleDisplay from "@component/helpers/PageTitleDisplay";
import { useAppDispatch, useAppSelector } from "@component/helpers/ReduxHooks";
import { logout } from "@component/store/slices";
import { useRouter } from "next/navigation";
import { notification } from "@component/helpers/notification";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.isAuth);

  const handleLogout = () => {
    dispatch(logout());
    notification("Вы успешно вышли из аккаунта", "success");
    router.push("/sign-in");
  };

  if (isAuth) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              icon
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <PageTitleDisplay />
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => router.push("/create-product")}
              sx={{
                marginRight: "20px",
              }}
            >
              Create product
            </Button>
            <Button color="inherit" onClick={() => handleLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
};

export default Header;
