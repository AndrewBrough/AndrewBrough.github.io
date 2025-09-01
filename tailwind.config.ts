import daisyui, { Config as DaisyConfig } from "daisyui";
import type { Config as TailwindConfig } from "tailwindcss";

export const config: TailwindConfig & DaisyConfig = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark", "light"],
  },
};

export const tailwindConfig = config;
