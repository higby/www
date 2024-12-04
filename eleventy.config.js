import filters from "./config/filters.js"
import markdown from "./config/markdown.js"
import plugins from "./config/plugins.js"
import styles from "./config/styles.js"
import transforms from "./config/transforms.js"

export default (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy({ [`source/static/`]: "/" })

	eleventyConfig.addPlugin(filters)
	eleventyConfig.addPlugin(markdown)
	eleventyConfig.addPlugin(plugins)
	eleventyConfig.addPlugin(styles)
	eleventyConfig.addPlugin(transforms)

	eleventyConfig.addPassthroughCopy({
		"./node_modules/@zachleat/snow-fall/snow-fall.js": "snow-fall.js"
	})
}

export const config = {
	dir: {
		input: "source/",
		includes: "templates/partials/",
		layouts: "templates/layouts/",
		data: "data/"
	}
}
