import defaults from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"

export default [
	{
		languageOptions: {
			ecmaVersion: "latest",
			globals: {
				...globals.browser,
				...globals.node
			},
			sourceType: "module"
		},
		rules: {}
	},
	defaults.configs.recommended,
	prettier
]
