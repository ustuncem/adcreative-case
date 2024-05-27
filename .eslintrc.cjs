module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@tanstack/eslint-plugin-query', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Built-in modules like 'fs' or 'path'
          'external', // External modules like 'react' or 'lodash'
          'internal', // Internal modules
          'parent', // Parent imports like '../file'
          'sibling', // Sibling imports like './file'
          'index', // Index imports like './'
          'object', // Object imports
          'type', // Type imports
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '#{/**,}', // Custom pattern for internal modules
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
