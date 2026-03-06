import { defineConfig, globalIgnores } from "eslint/config";
import nextConfig from "eslint-config-next";
import nextTypeScriptConfig from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextConfig,
  ...nextTypeScriptConfig,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
