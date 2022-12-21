import React, { FC, ReactNode, useCallback, useMemo, useState } from "react";
import Guide from "../shared/guide/Guide";
import Header from "../shared/header/Header";
import styles from "./Layout.module.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { localStorage } from "../../services/localStorage";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">(() => localStorage.getTheme());

  const toggleColorMode = useCallback(() => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setTheme("dark");
    } else {
      setMode("light");
      localStorage.setTheme("light");
    }
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={styles.wrapper}>
        <Header toggleColorMode={toggleColorMode} />
        {children}
        <Guide />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
