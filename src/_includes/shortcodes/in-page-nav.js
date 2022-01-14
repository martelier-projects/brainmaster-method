const jsdom = require('jsdom')
const { JSDOM } = jsdom
const marked = require('marked')

/**
 * Create a list item for the in page nav.
 */
const createListItem = ({ id, textContent }) =>
  `<li class="in-page-nav__list-item"><a class="in-page-nav__link" href="#${id}">${textContent}</a></li>`

/**
 * Concatenate all HTML list items to a string, so it can be used inside the template tags,
 */
const concatenateListItems = (collection, item) => `${collection}${item}`

/**
 * Get the title from a flexible.
 * Also returns the title if it's part of Rich Content
 */
const getTitleFromFlexible = flexible => {
  if (flexible.title) {
    return flexible.title
  }

  if (flexible.component === 'rich-text') {
    // Go from MarkDown to HTML.
    const flexibleAsHtml = marked(flexible.text)

    // Create a document from the HTML, so it's parsable.
    const { document } = new JSDOM(`<!DOCTYPE html>${flexibleAsHtml}`).window

    // Get the first h2 element.
    const heading = document.querySelector('h2')

    // Get the text content of the h2 element.
    return heading ? heading.textContent : null
  }

  return ''
}

/**
 * Create the in page nav component.
 */
module.exports = ({ content, sections }) => {
  // Create a DOM from the data so the querySelectorAll method can be used on the input.
  const { document } = new JSDOM(`<!DOCTYPE html>${content}`).window

  const items = Array.from(document.querySelectorAll('h2')).map(createListItem)

  const titles = sections
    .filter(section => section.show !== false)
    .map(getTitleFromFlexible)
    .filter(title => title)
    .map(title => ({
      textContent: title,
      id: title.toLowerCase().replace(/\s/g, '-'),
    }))
    .map(createListItem)

  const allItems = [...items, ...titles].reduce(concatenateListItems, '')

  return `<nav class="in-page-nav"><ol class="in-page-nav__list">${allItems}</ol></nav>`
}
