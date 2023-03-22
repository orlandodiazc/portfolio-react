module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'eslint-config-prettier',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
}
