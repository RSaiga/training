module.exports = {
    roots: ["<rootDir>/src/", "<rootDir>/tests/"],
    collectCoverageFrom: [
        "tests/**/*.{js,jsx,ts,tsx}",
        "!tests/**/*.d.ts",
        "!tests/mocks/**",
    ],
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    modulePaths: ["<rootDir>/src"],
    transform: {
        "^.+\\.(ts|js|tsx|jsx)$": "ts-jest",
        "^.+\\.(vue)$": "@vue/vue3-jest",
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx|vue)$",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
    moduleFileExtensions: [
        "tsx",
        "ts",
        "web.js",
        "js",
        "web.ts",
        "web.tsx",
        "json",
        "web.jsx",
        "jsx",
        "node",
        "vue"
    ],
    resetMocks: true,
};