---
title: "Styleguide"
---

## Headings & Sections

<p 
	role="presentation" 
	style="font-size: var(--font-size-1); font-weight:bold">
	Heading 1 with <a href="/#">a link</a> &amp; <code>&lt;code&gt;</code>
</p>
<p 
	role="presentation" 
	style="font-size: var(--font-size-2); font-weight:bold">
	Heading 2 with <a href="/#">a link</a> &amp; <code>&lt;code&gt;</code>
</p>
<p 
	role="presentation" 
	style="font-size: var(--font-size-3); font-weight:bold">
	Heading 3 with <a href="/#">a link</a> &amp; <code>&lt;code&gt;</code>
</p>

## Block Elements

### Paragraphs and Images

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.

![A screenshot from She-Ra and the Princesses of Power](https://shera.gay/gay.jpeg)

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.

### Blockquote

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

> I am brave, strong, loyal, and give great hugs. And I am going to be the best friend that _I CAN BE_!
> — Scorpia, to herself in episode <cite><a href="/wiki/Princess_Scorpia">Princess Scorpia</a></cite>

Vitae tortor condimentum lacinia quis vel eros. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Morbi leo urna molestie at elementum. Lacus sed turpis tincidunt id aliquet risus feugiat in.

## Text Elements

The [a element](/#) example

The **strong element** example

The **b element** example

The _em element_ example

The _i element_ example

The <cite>cite element</cite> example

The `code element` example

The <kbd>kbd element</kbd> example

## Monospace / Preformatted

Code block wrapped in "pre" and "code" tags:

```javascript
// Loop through Divs using Javascript.
var divs = document.querySelectorAll("div")

for (i = 0; i < divs.length; ++i) {
	divs[i].style.color = "green"
}
```

Monospace Text wrapped in "pre" tags:

<pre>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</pre>

## List Types

### Ordered List

1. List Item 1
2. List Item 2
3. List Item 3
   1. List Item 3.1
   2. List Item 3.2
   3. List Item 3.3
4. List Item 4

### Unordered List

- List Item 1
- List Item 2
- List Item 3
  - List Item 3.1
  - List Item 3.2
    - List Item 3.2.1
    - List Item 3.2 2
  - List Item 3.3
- List Item 4

### Definition List

<dl>
	<dt>Definition Term 1</dt>
	<dd>Definition Description 1</dd>
	<dd>Definition Description 2</dd>
	<dt>Definition Term 2</dt>
	<dd>Definition Description 1</dd>
</dl>

## Tables

<table>
	<caption>This is a table caption</caption>
	<thead>
		<tr>
			<th>Table Header 1</th>
			<th>Table Header 2</th>
			<th>Table Header 3</th>
			<th>Table Header 4</th>
		</tr>
	</thead>
	<tbody>
		<tr> 
			<td colspan="2" rowspan="2">A cell spanning 2 rows & 2 columns</td>
			<td>Division 2</td>
			<td>Division 3</td>
		</tr>
		<tr>
			<td>Division 2</td>
			<td>Division 3</td>
		</tr>
		<tr>
			<td colspan="4">A cell spanning 4 columns</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<th>Table Footer 1</th>
			<th>Table Footer 2</th>
			<th>Table Footer 3</th>
			<th>Table Footer 4</th>
		</tr>
	</tfoot>
</table>
