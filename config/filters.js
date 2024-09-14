import dayjs from "dayjs"

export default (eleventyConfig) => {
	eleventyConfig.addFilter("encodeURI", (data) => encodeURIComponent(data))

	// https://github.com/maxboeck/mxb/blob/main/utils/filters.js
	eleventyConfig.addFilter("formatDate", async (date, format) => {
		const formatToken = format || "MMM DD, YYYY"

		return dayjs(date).format(formatToken)
	})
}
