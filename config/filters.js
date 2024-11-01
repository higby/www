import dayjs from "dayjs"
import path from "node:path"

export default (eleventyConfig) => {
	eleventyConfig.addFilter("encodeURI", (data) => encodeURIComponent(data))

	// https://github.com/maxboeck/mxb/blob/main/utils/filters.js
	eleventyConfig.addFilter("formatDate", async (date, format) => {
		const formatToken = format || "MMM DD, YYYY"

		return dayjs(date).format(formatToken)
	})

	eleventyConfig.addFilter("stripPath", (permalink) => {
		const directoryIndex = permalink.indexOf(path.sep, 1)

		return `${permalink.slice(directoryIndex)}/`
	})
}
