import React, { FC } from "react";
import { AppBar, Typography, Toolbar, Container } from "@mui/material";
import styles from "./Header.module.css";

const Header: FC = () => {
  //TODO: сделать переход к истории (?)
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Тестер регулярных выражений
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
