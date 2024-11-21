module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: '.e2e-spec.ts$',
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: 'coverage',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '\\.js$', // Ignore JS files in your src directory
      ]
  };
  