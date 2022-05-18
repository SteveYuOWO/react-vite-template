export default {
  "src/**/*.ts?(x)": [
    () => "tsc --project tsconfig.json --alwaysStrict",
  ],
  "src/**/*.{js,jsx,ts,tsx,md,html,css}": [
    "prettier --write"
  ],
};
