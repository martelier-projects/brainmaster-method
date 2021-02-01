module.exports = nunjucksEnvironment => (html, { quotes, content }) => {
  const container = component =>
    `</section><div class="text-page__breakout">${component}</div><section class="text-page__content">`

  const quotesComponent = nunjucksEnvironment.renderString(
    container("{% include 'module/quote-list.njk' %}"),
    quotes
  )

  const rendered = html.replace('[testimonials]', quotesComponent)

  return rendered
}
