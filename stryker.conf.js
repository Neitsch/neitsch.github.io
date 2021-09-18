/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
    mutate: ['{lib,components,pages}/**/*.ts?(x)', '!{lib,components,pages}/**/*@(.test|.spec|Spec).ts?(x)'],
    ignorePatterns: [
        "coverage", "out", ".next", "public", "generated", "/*.{ts,js,tsx,json}", ".github", "__mocks__", ".*"
    ],
    "jest": {
        "config": {
            "testEnvironment": "@stryker-mutator/jest-runner/jest-env/jsdom"
        },
    }
};
