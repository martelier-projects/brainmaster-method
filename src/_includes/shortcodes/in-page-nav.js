const jsdom = require('jsdom')
const { JSDOM } = jsdom

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
 * Create the in page nav component.
 */
module.exports = data => {
  // Create a DOM from the data so the querySelectorAll method can be used on the input.
  const { document } = new JSDOM(`<!DOCTYPE html>${data}`).window

  const items = Array.from(document.querySelectorAll('h2'))
    .map(createListItem)
    .reduce(concatenateListItems, '')

  return `<nav class="in-page-nav"><ol class="in-page-nav__list">${items}</ol></nav>`
}
