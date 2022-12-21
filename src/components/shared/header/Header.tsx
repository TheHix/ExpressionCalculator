import React, { FC } from "react";

import { AppBar, Typography, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

interface HeaderProps {
  toggleColorMode: () => void;
}

const Header: FC<HeaderProps> = ({ toggleColorMode }) => {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" component="div">
          Тестер регулярных выражений
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center" }} variant="h6" color="inherit" component="div">
          {theme.palette.mode === "dark" ? "темная" : "светлая"} тема
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
