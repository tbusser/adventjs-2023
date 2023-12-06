[![Solutions for AdventJs Challenges](https://github.com/tbusser/adventjs-2023/actions/workflows/test.yml/badge.svg)](https://github.com/tbusser/adventjs-2023/actions/workflows/test.yml)

# ✨🎄 AdventJS 2023 🎄✨
These are my solutions for the 2023 edition of [AdventJS](https://adventjs.dev/). This repository contains everything you need to run my solutions.

## Setup

The solutions require NodeJS version 19.2.0 to run. In addition you need a couple of packages, these can be installed by running the `npm install` command from the root folder of the project.

## Solutions
Each day has its own folder and should contain the following files:
- `README.md`, this is explains the problem for the day
- `solution.ts`, this contains a single function which is the default export. The function is used to solve the problem.
- `solution.test.ts`, this contains the tests to verify the solution meets the criteria as stated in the problem.

## Running the tests

To run a test for a specific day you can use the following command:
```bash
npm test ./src/<day>
```
For instance to run the tests for day 2:
```bash
npm test ./src/02/
```

It is also possible to run the test for all days using the following command:
```bash
npm test
```

## Scoring
Part of the score comes from having a solution with a low [Cognitive Complexity score](https://www.sonarsource.com/docs/CognitiveComplexity.pdf). While I haven't found anything that can calculate this on the client-side there is a VSCode extension that will give you a reasonable indication of how your solution will be scored. The CodeMetric extension calculates the complexity and gives feedback on how the complexity code was calculated. See the [extension](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics) for more information.