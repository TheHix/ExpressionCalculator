export const localStorage = {
  getTheme(): "light" | "dark" {
    const theme = window.localStorage.getItem("theme") as "light" | "dark";

    return theme || "light";
  },
  setTheme(theme: "light" | "dark"): void {
    window.localStorage.setItem("theme", theme);
  },
};
