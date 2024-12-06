import md from "markdown-it"
import mdAttribution from "markdown-it-attribution"
import mdAttrs from "markdown-it-attrs"
import mdDefList from "markdown-it-deflist"
import mdImplicitFigures from "markdown-it-implicit-figures"

//
const markdown = md({
	html: true,
	breaks: true,
	linkify: true,
	typographer: true
})
	.use(mdAttribution, {
		classNameContainer: "",
		classNameAttribution: "",
		removeMarker: false
	})
	.use(mdAttrs)
	.use(mdDefList)
	.use(mdImplicitFigures)

export default (eleventyConfig) => eleventyConfig.setLibrary("md", markdown)
