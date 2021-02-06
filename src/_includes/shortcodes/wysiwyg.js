module.exports = nunjucksEnvironment => (
  html,
  { quotes, content, timeline, pjotr, topics }
) => {
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
  const pjotrComponent = nunjucksEnvironment.renderString(
    container("{% include 'module/pjotr.njk' %}"),
    pjotr
  )
  const topicsComponent = nunjucksEnvironment.renderString(
    container("{% include 'module/topic-list.njk' %}"),
    { topics }
  )

  console.log('topics: ', topics)

  const rendered = html
    .replace('[testimonials]', quotesComponent)
    .replace('[timeline]', timelineComponent)
    .replace('[pjotr]', pjotrComponent)
    .replace('[topics]', topicsComponent)

  return rendered
}
