// import type {Config} from '@jest/types';

// Sync object
// const config: Config.InitialOptions = {
const config = {
  verbose: true,
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true
      }
    ],
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  moduleNameMapper: {
    "^\\$lib(.*)$": "<rootDir>/src/lib$1",
    "^\\$app(.*)$": "<rootDir>/.svelte-kit/dev/runtime/app$1"
  }
};
export default config;
