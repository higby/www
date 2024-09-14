import browserslist from "browserslist"
import { bundle, browserslistToTargets } from "lightningcss"
import path from "path"

const targets = browserslistToTargets(browserslist("> 0.2% and not dead"))
const stylesDirectory = "./source/styles/"

export default (eleventyConfig) => {
	eleventyConfig.addExtension("css", {
		outputFileExtension: "css",
		useLayouts: false,
		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath)
			if (parsed.name.startsWith("_")) return

			return async () =>
				bundle({
					filename: inputPath,
					minify: true,
					targets
				}).code
		},
		compileOptions: {
			permalink: (contents, inputPath) =>
				path.relative(stylesDirectory, inputPath)
		}
	})

	eleventyConfig.addTemplateFormats("css")
}
