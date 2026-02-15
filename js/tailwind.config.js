tailwind.config = {
  darkMode: "class",
  // Configuración del tema
  theme: {
    extend: {
      colors: {
        primary: "#137fec", // <--- Si cambias esto aquí, cambiará en tus tarjetas
        "background-light": "#f6f7f8",
        "background-dark": "#0a0f14",
        "slate-950": "#020617",
        "emerald-500": "#10b981"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  // Plugin para crear componentes personalizados
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".option-card": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "rgba(2, 6, 23, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          cursor: "pointer",
          transition: "border-color 0.15s ease-in-out",
          userSelect: "none",

          "&:hover": {
            borderColor: theme("colors.primary"),
            boxShadow: `0 0 15px ${theme("colors.primary")}33`
          },

          "&:has(input:checked)": {
            borderColor: theme("colors.primary"),
            backgroundColor: `${theme("colors.primary")}1A`
          }
        },
        ".form-checkbox": {
          width: "1.25rem",
          height: "1.25rem",
          color: theme("colors.primary"),
          borderRadius: "0.25rem",
          backgroundColor: "#1e293b",
          borderWidth: "0",
          transitionProperty: "all",
          transitionDuration: "150ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",

          "&:focus": {
            "--tw-ring-offset-width": "0px",
            "--tw-ring-color": `${theme("colors.primary")}80`,
            boxShadow: "0 0 0 2px var(--tw-ring-color)"
          }
        }
      });
    }
  ]
};
