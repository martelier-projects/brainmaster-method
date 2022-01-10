const jsdom = require('jsdom')
const { JSDOM } = jsdom
const marked = require('marked')

/**
 * Create a list item for the in page nav.
 */
const createListItem = ({ slug, title }) =>
  `<li class="in-page-nav__list-item"><a class="in-page-nav__link" href="#${slug}">${title}</a></li>`

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
module.exports = sections => {
  const titles = sections
    .map(getTitleFromFlexible)
    .filter(title => title)
    .map(title => ({
      title,
      slug: title.toLowerCase().replace(/\s/g, '-'),
    }))
    .map(createListItem)
    .reduce(concatenateListItems, '')

  return `<nav class="in-page-nav"><ol class="in-page-nav__list">${titles}</ol></nav>`
}
