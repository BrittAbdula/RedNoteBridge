import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色调 - 小红书红
        primary: {
          50: "#FFF1F3",
          100: "#FFE4E8",
          200: "#FFCCD4",
          300: "#FFB3BF",
          400: "#FF8599",
          500: "#FE2C55", // 主色
          600: "#F21F48",
          700: "#E6193F",
          800: "#D91638",
          900: "#CC1432",
        },
        // 背景色系
        surface: {
          50: "#FFFFFF", // 纯白背景
          100: "#FAFAFA", // 页面背景
          200: "#F5F5F5", // 卡片hover背景
          300: "#EEEEEE", // 分割线、边框
        },
        // 文字色系
        content: {
          primary: "#000000", // 主要文字
          secondary: "#2C2C2C", // 次要文字
          tertiary: "#525252", // 辅助文字
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#000000",
            "--tw-prose-headings": "#000000",
            "--tw-prose-lead": "#000000",
            "--tw-prose-links": "#FE2C55",
            "--tw-prose-bold": "#000000",
            "--tw-prose-counters": "#000000",
            "--tw-prose-bullets": "#000000",
            "--tw-prose-hr": "#E5E5E5",
            "--tw-prose-quotes": "#000000",
            "--tw-prose-quote-borders": "#E5E5E5",
            "--tw-prose-captions": "#000000",
            "--tw-prose-code": "#000000",
            "--tw-prose-pre-code": "#000000",
            "--tw-prose-pre-bg": "#F8F8F8",
            "--tw-prose-th-borders": "#E5E5E5",
            "--tw-prose-td-borders": "#E5E5E5",
            color: "#000000",
            p: {
              color: "#000000",
            },
            li: {
              color: "#000000",
            },
            h1: {
              color: "#000000",
            },
            h2: {
              color: "#000000",
            },
            h3: {
              color: "#000000",
            },
            h4: {
              color: "#000000",
            },
            strong: {
              color: "#000000",
            },
            "ul > li::before": {
              display: "none",
            },
            "ol > li::before": {
              display: "none",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;