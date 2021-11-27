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
 * Create the in page nav component.
 */
module.exports = sections => {
  const titles = sections
    .map(section => (section.title ? section.title : ''))
    .filter(title => title)
    .map(title => ({
      title,
      slug: title.toLowerCase().replace(/\s/g, '-'),
    }))
    .map(createListItem)
    .reduce(concatenateListItems, '')

  return `<nav class="in-page-nav"><ol class="in-page-nav__list">${titles}</ol></nav>`
}
