import type { Config } from "@jest/types";

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
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
    moduleFileExtensions: ["js", "ts", "svelte"]
  };
};
