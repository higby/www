import directoryOutput from "@11ty/eleventy-plugin-directory-output"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import {
	EleventyHtmlBasePlugin,
	EleventyRenderPlugin,
	IdAttributePlugin
} from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"

const imageDirectory = "images/"

export default (eleventyConfig) => {
	eleventyConfig.addPlugin(directoryOutput)

	eleventyConfig.addPlugin(syntaxHighlight)

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		outputDir: `${eleventyConfig.directories.output}${imageDirectory}`,
		urlPath: `/${imageDirectory}`,
		formats: ["avif", "webp", "jpeg"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async"
		}
	})
	eleventyConfig.addWatchTarget("source/images/")

	eleventyConfig.addPlugin(EleventyRenderPlugin)

	eleventyConfig.addPlugin(IdAttributePlugin, {
		selector: "h2,h3,h4,h5,h6"
	})
}
