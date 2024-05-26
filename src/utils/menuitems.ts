// Type for an individual menu item
interface MenuItem {
	text: string
	slug: string
}

// Type for a section containing multiple menu items
interface MenuSection {
	title: string
	order: number
	data: MenuItem[]
}

// Type for the full menu, with keys representing different parts like 'html'
interface MenuMain {
	html: MenuSection[]
}

const menuItems: MenuMain = {
	html: [
		{
			title: 'Basics',
			order: 1,
			data: [
				{ text: 'Basics', slug: 'what-is-html' },
				{ text: 'Paragraphs', slug: 'paragraphs' },
				{ text: 'Headings', slug: 'html-headings' },
				{ text: 'Comments', slug: 'html-comments' },
				{ text: 'Links', slug: 'html-links' },
				{ text: 'Images', slug: 'html-images' },
				{ text: 'Formatting', slug: 'html-formatting' }
			]
		},
		{
			title: 'Text Formatting',
			order: 2,
			data: [
				{ text: 'HTML Bold', slug: 'html-bold' },
				{ text: 'HTML Italic', slug: 'html-italic' },
				{
					text: 'HTML Superscript and Subscript',
					slug: 'html-superscript-and-subscript'
				},
				{ text: 'HTML Line Break', slug: 'html-line-break' },
				{ text: 'HTML Pre Tag', slug: 'html-pre-tag' },
				{ text: 'HTML Horizontal Line', slug: 'html-horizontal-line' }
			]
		},
		{
			title: 'Advanced Formatting',
			order: 3,
			data: [
				{
					text: 'HTML Block and Inline Elements',
					slug: 'html-block-and-inline-elements'
				},
				{ text: 'HTML Inline', slug: 'html-inline' }
			]
		},
		{
			title: 'Document Structure',
			order: 4,
			data: [
				{ text: 'HTML Head', slug: 'html-head' },
				{ text: 'HTML Title', slug: 'html-title' },
				{ text: 'HTML Style', slug: 'html-style' },
				{ text: 'HTML Meta Elements', slug: 'html-meta-elements' },
				{ text: 'HTML Favicon', slug: 'html-favicon' }
			]
		},
		{
			title: 'Lists',
			order: 5,
			data: [
				{ text: 'HTML List', slug: 'html-list' },
				{ text: 'HTML Unordered List', slug: 'html-unordered-list' },
				{ text: 'HTML Ordered List', slug: 'html-ordered-list' },
				{ text: 'HTML Description List', slug: 'html-description-list' }
			]
		},
		{
			title: 'Tables and Forms',
			order: 6,
			data: [
				{ text: 'Table', slug: 'html-table' },
				{ text: 'Form', slug: 'html-form' },
				{ text: 'Form Elements', slug: 'html-form-elements' },
				{ text: 'Input', slug: 'html-input' },
				{ text: 'Form Action', slug: 'html-form-action' }
			]
		},
		{
			title: 'Semantic Elements',
			order: 7,
			data: [
				{ text: 'Semantic HTML', slug: 'semantic-html' },
				{ text: 'div Tag', slug: 'html-div-tag' },
				{ text: 'aside Tag', slug: 'html-aside-tag' },
				{ text: 'section Tag', slug: 'html-section-tag' },
				{ text: 'footer Tag', slug: 'html-footer-tag' },
				{ text: 'main Tag', slug: 'html-main-tag' }
			]
		}
	]
}

export { menuItems }
