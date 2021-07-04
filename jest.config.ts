import type { Config } from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
        transform: {
            '^.+\\.svelte$': 'svelte-jester',
            '^.+\\.js$': 'babel-jest',
            '^.+\\.ts$': 'ts-jest',
        },
        moduleFileExtensions: ['ts', 'js', 'svelte'],
    };
};