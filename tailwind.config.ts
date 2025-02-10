import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(270deg, rgba(23, 38, 92, 0.6) -6.38%, rgba(2, 110, 189, 0.408) 107.1%)",
      },
    },
  },
  plugins: [],
};

export default config;
