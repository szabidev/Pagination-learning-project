const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  verbose: true,
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/**/*.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
  coverageReporters: ["json", "lcov", "text", "clover"],
};
module.exports = createJestConfig(customJestConfig);
