module.exports = {
	extends: [
		'next',
		'turbo',
		'prettier',
		'@react-native-community',
		'plugin:storybook/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				quoteProps: 'preserve',
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'es5',
			},
		],
		'prefer-const': 'warn',
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error'],
			},
		],
	},
	ignorePatterns: ['**/lib/**/*'],
	globals: {
		JSX: true,
	},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve('next/babel')],
		},
	},
};
