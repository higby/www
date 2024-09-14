import htmlmin from "html-minifier-terser"

export default (eleventyConfig) => {
	eleventyConfig.addTransform("htmlminify", function (content) {
		if (!(this.page.outputPath || "").endsWith(".html")) return content

		return htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true
		})
	})
}
