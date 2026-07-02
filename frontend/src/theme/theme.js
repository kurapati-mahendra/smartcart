import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
};

const typography = {
  fontFamily: "'Outfit', 'Inter', sans-serif",
  h1: { fontSize:"6rem", fontWeight: 700, "@media (max-width:960px)":{fontSize:"5rem"},"@media (max-width:600px)":{fontSize:"4rem"},"@media (max-width:414px)":{fontSize:"2.5rem"} },
  h2: { fontSize:"3.75rem", fontWeight: 700, "@media (max-width:960px)":{fontSize:"3rem"},"@media (max-width:662px)":{fontSize:"2.3rem"},"@media (max-width:414px)":{fontSize:"2.2rem"} },
  h3: { fontSize:"3rem", fontWeight: 600, "@media (max-width:960px)":{fontSize:"2.4rem"},"@media (max-width:662px)":{fontSize:"2rem"},"@media (max-width:414px)":{fontSize:"1.7rem"} },
  h4: { fontSize:"2.125rem", fontWeight: 600, "@media (max-width:960px)":{fontSize:"1.5rem"},"@media (max-width:600px)":{fontSize:"1.25rem"} },
  h5: { fontSize:"1.5rem", fontWeight: 500, "@media (max-width:960px)":{fontSize:"1.25rem"},"@media (max-width:600px)":{fontSize:"1.1rem"} },
  h6: { fontSize:"1.25rem", fontWeight: 500, "@media (max-width:960px)":{fontSize:"1.1rem"},"@media (max-width:600px)":{fontSize:"1rem"} },
  body1: { fontSize:"1rem","@media (max-width:960px)":{fontSize:"1rem"},"@media (max-width:600px)":{fontSize:".9rem"} },
  body2: { fontSize:"1rem","@media (max-width:960px)":{fontSize:"1rem"},"@media (max-width:600px)":{fontSize:"1rem"},"@media (max-width:480px)":{fontSize:".97rem"} },
};

/* ──────────────────────────────────────────────
   LIGHT THEME — Warm Indigo + Amber Accent
   ────────────────────────────────────────────── */
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5C2D91",        // Rich purple-indigo
      light: "#F3EAFF",       // Soft lavender tint
      dark: "#3A1866",        // Deep plum
      customBlack: "#1A0A2E", // Near-black purple
    },
    secondary: { main: "#F59E0B" },  // Warm amber accent
    background: {
      default: "#FAF7FF",      // Subtle warm lavender background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A0A2E",     // Deep purple-black
      secondary: "#6B5B7B",   // Muted purple-gray
    },
  },
  breakpoints,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "linear-gradient(135deg, #5C2D91 0%, #7C4DBA 50%, #F59E0B 100%)",
          boxShadow: "0 4px 18px rgba(92,45,145,0.35)",
          color: "#fff",
          fontWeight: 600,
          letterSpacing: "0.5px",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #3A1866 0%, #5C2D91 50%, #D97706 100%)",
            boxShadow: "0 6px 24px rgba(92,45,145,0.5)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 12,
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

/* ──────────────────────────────────────────────
   DARK THEME — Deep Space + Teal/Cyan Glow
   ────────────────────────────────────────────── */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A78BFA",         // Soft violet
      light: "#1E1333",        // Dark card tint
      dark: "#C4B5FD",         // Lighter violet for emphasis
      customBlack: "#EDE9FE",  // Light text on dark
    },
    secondary: { main: "#34D399" },   // Emerald-teal accent
    background: {
      default: "#0B0D17",      // Near-black with a blue tint
      paper: "#131627",        // Slightly lighter dark card
    },
    text: {
      primary: "#E8E4F0",     // Warm off-white
      secondary: "#9CA3AF",   // Muted gray
    },
  },
  breakpoints,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #34D399 100%)",
          boxShadow: "0 4px 18px rgba(124,58,237,0.35)",
          color: "#fff",
          fontWeight: 600,
          letterSpacing: "0.5px",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #6D28D9 0%, #7C3AED 50%, #10B981 100%)",
            boxShadow: "0 6px 24px rgba(124,58,237,0.5)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 12,
          boxShadow: "0 2px 24px rgba(0,0,0,0.5)",
          border: "1px solid rgba(167,139,250,0.08)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export const theme = lightTheme;
export default lightTheme;