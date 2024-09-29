module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  estTimeout: 20000,
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};
