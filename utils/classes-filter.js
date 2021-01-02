/**
 * Filter all properties with the value: false.
 * @param {Object} config
 */
const classesFilter = config =>
  Object.keys(config)
    .map(key => (config[key] ? key : null))
    .filter(v => v)
    .join(' ')

module.exports = {
  classesFilter,
}
