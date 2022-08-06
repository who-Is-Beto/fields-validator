export default {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["json", "html", "text"]
};
