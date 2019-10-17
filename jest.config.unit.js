// module.exports = {
//     globals: {
//       'ts-jest': {
//         tsConfig: 'tsconfig.test.json'
//       }
//     },
//     roots: ['<rootDir>/src'],
//     transform: {
//       '^.+\\.storybook/config\\.js$': '<rootDir>/jest/storyshots-transform',
//       '^.+\\.tsx?$': 'ts-jest',
//       '^.+\\.jsx?$': 'ts-jest'
//     },
//     moduleNameMapper: {
//       '^lib/(.*)$': '<rootDir>/src/lib/$1',
//       '^components/(.*)$': '<rootDir>/src/components/$1',
//       '^states/(.*)$': '<rootDir>/src/states/$1',
//       '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//         '<rootDir>/__mocks__/fileMock.js',
//       '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy'
//     },
//     testRegex: '\\.test\\.tsx?$',
//     setupFiles: ['<rootDir>/jest/register-context.js'],
//     setupFilesAfterEnv: ['<rootDir>/jest/setup.unit.ts', '<rootDir>/node_modules/jest-enzyme/lib/index.js'],
//     collectCoverage: true,
//     collectCoverageFrom: ['**/*.{ts,tsx}', '!**/src/**/*.{stories,spa,html,e2e-test}.tsx']
//   };
  