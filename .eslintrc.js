module.exports = {
    root: true, // Indicates the root of the configuration
    env: {
      node: true, // Enable Node.js global variables
      browser: true, // Enable browser global variables
      es6: true, // Enable ES6 features
    },
    parser: '@typescript-eslint/parser', // Specify the ESLint parser
    parserOptions: {
      ecmaVersion: 2020, // Use the latest ECMAScript standard
      sourceType: 'module', // Allow using imports
      ecmaFeatures: {
        jsx: true, // Enable JSX if using React (optional)
      },
    },
    extends: [
      'eslint:recommended', // Use recommended ESLint rules
      'plugin:vue/vue3-recommended', // Use recommended Vue rules
      'plugin:@typescript-eslint/recommended', // Use recommended TypeScript rules
    ],
    rules: {
      // Customize rules as needed
      'vue/multi-word-component-names': 'off', // Example: Allow single-word component names
      '@typescript-eslint/no-explicit-any': 'warn', // Example: Warn on 'any' usage
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Warn on console.log in production
    },
    overrides: [
      {
        files: ['*.vue'],
        rules: {
          'max-len': 'off', // Disable max-len for Vue files
        },
      },
    ],
  };
  