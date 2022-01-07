const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // 環境変数のパス
  dir: "./",
});

// jestのカスタム設定は以下に書く
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
