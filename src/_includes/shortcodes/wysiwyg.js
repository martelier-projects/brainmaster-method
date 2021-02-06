module.exports = nunjucksEnvironment => (
  html,
  { quotes, content, timeline }
) => {
  console.log('timeline: ', timeline)
  const container = component =>
    `</section><div class="text-page__breakout">${component}</div><section class="text-page__content">`

  const quotesComponent = nunjucksEnvironment.renderString(
    container("{% include 'module/quote-list.njk' %}"),
    quotes
  )
  const timelineComponent = nunjucksEnvironment.renderString(
    container("{% include 'module/timeline.njk' %}"),
    timeline
  )

  const rendered = html
    .replace('[testimonials]', quotesComponent)
    .replace('[timeline]', timelineComponent)

  return rendered
}
