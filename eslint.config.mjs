import globals from 'globals';
import ESLint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import tsESLint from "typescript-eslint";

export default [
  // для TypeScript и JavaScript
  ESLint.configs.recommended,
  ...tsESLint.configs.recommended,
  ...tsESLint.configs.strict,
  ...tsESLint.configs.stylistic,
  {
    files: [ "**/*.{js,mjs,cjs,ts}" ]
  },
  {
    // отключение проверок для папок
    ignores: [
      'dist/', '*.json', '*.config.js', '*.config.mjs'
    ],
  },
  {
    // определение стандарта и парсинга
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    // files: ['src/**/*.js'],
    rules: {
      '@stylistic/indent': [ 'error', 2 ], // отступы, авто
      '@stylistic/semi': [ 'error', 'always' ], // точка с запятой, авто
      '@stylistic/no-unused-vars': 'off', // не используемые переменные
      '@stylistic/no-console': 'off', // console.log
      '@/no-var': 'error',
    },
  },
  {
    files: [ '*.config.*' ], // правила для конфигов
    rules: {
      '@stylistic/no-underscore-dangle': [ 'off' ], // двойное подчеркивание перед/после переменной
      '@stylistic/import/no-extraneous-dependencies': 'off', // импорт из дев-зависимостей
    },
  },
  {
    plugins: { '@stylistic': stylistic, },
    rules: {
      '@stylistic/max-len': [ 'error', { code: 145 } ], // длина строки, нет авто
      '@stylistic/quotes': [ 'error', 'single' ], // одинарные кавычки, авто
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ], // пробелы внутри массива - авто
      '@stylistic/array-bracket-newline': [
        'error', { 'multiline': true, 'minItems': 5 }
      ], // перенос элементов массива на новые строки, если многоэлементный - авто
      '@stylistic/object-curly-spacing': [ 'error', 'always' ], // пробелы внутри объекта
      '@stylistic/object-curly-newline': [
        'error', {
          'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
        }
      ], // перенос свойств объекта на новые строки, если много свойств - авто
      '@stylistic/no-multi-spaces': [
        'error', {
          exceptions: {
            'Property': false,
            'BinaryExpression': true,
            'VariableDeclarator': true,
            'ImportDeclaration': true
          }
        }
      ], // убираем много пробелов в разных местах, авто
      '@stylistic/key-spacing': [ 'error', { 'mode': 'strict' } ],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': [
        'error', {
          max: 1, // одна внутренняя
          maxBOF: 1, // одна сверху в импортах
        }
      ], // пустые строки, авто
    },
  },
];