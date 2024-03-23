module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"airbnb",
		"airbnb-typescript",
		"plugin:prettier/recommended",
		"plugin:react/jsx-runtime",
		"plugin:jsx-a11y/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{ prefer: "type-imports" },
		],
	},
}
