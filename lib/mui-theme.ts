import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Palette["primary"]
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"]
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#ffb606" }, // gold
    secondary: { main: "#033b6c" }, // deep blue
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: "#0a0a0a", secondary: "#404040" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system",
    h1: { fontWeight: 700, lineHeight: 1.2 },
    h2: { fontWeight: 700, lineHeight: 1.25 },
    body1: { lineHeight: 1.6, fontSize: "1rem" },
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained", disableElevation: true },
    },
    MuiLink: {
      styleOverrides: { root: { color: "#033b6c" } },
    },
  },
})
