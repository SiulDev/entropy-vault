tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#0a0f14",
        "slate-950": "#020617",
        "emerald-500": "#10b981"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px"
      }
    }
  }
};
