module.exports = (url, label, permalink) => {
  const classes = url.includes(permalink)
    ? 'navigation__link navigation__link--active'
    : 'navigation__link'

  return `<li class="navigation__item"><a class="${classes}" href="${url}">${label}</a></li>`
}
