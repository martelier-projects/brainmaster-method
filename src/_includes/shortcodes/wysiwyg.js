module.exports = nunjucksEnvironment => (
  html,
  {
    quotes,
    content,
    timeline,
    pjotr,
    topics,
    faq,
    getAcquainted,
    pagesPreview,
    getAcquaintedSingleButton,
    getAcquaintedOnContact = false,
  }
) => {
  const container = component =>
    `</section><div class="text-page__breakout">${component}</div><section class="text-page__content">`
  const containerSmall = component =>
    `</section><div class="text-page__breakout text-page__breakout--small">${component}</div><section class="text-page__content">`
  const containerMedium = component =>
    `</section><div class="text-page__breakout text-page__breakout--medium">${component}</div><section class="text-page__content">`
  const containerReduceTop = component =>
    `</section><div class="text-page__breakout reduce-top">${component}</div><section class="text-page__content">`

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
  const faqComponent = nunjucksEnvironment.renderString(
    containerSmall("{% include 'module/faq.njk' %}"),
    faq
  )
  const getAcquaintedComponent = nunjucksEnvironment.renderString(
    containerReduceTop("{% include 'module/get-acquainted.njk' %}"),
    {
      ...getAcquainted,
      onContact: getAcquaintedOnContact,
    }
  )
  const getAcquaintedSingleButtonComponent = nunjucksEnvironment.renderString(
    container("{% include 'module/get-acquainted-single-button.njk' %}"),
    {
      ...getAcquaintedSingleButton,
      onContact: getAcquaintedOnContact,
    }
  )

  const pagePreviewForYouComponent = nunjucksEnvironment.renderString(
    containerMedium("{% include 'module/page-preview.njk' %}"),
    {
      page: 'Voor jou',
      pagesPreview,
    }
  )

  const rendered = html
    .replace('[testimonials]', quotesComponent)
    .replace('[timeline]', timelineComponent)
    .replace('[pjotr]', pjotrComponent)
    .replace('[topics]', topicsComponent)
    .replace('[faq]', faqComponent)
    .replace('[get-acquainted]', getAcquaintedComponent)
    .replace(
      '[get-acquainted-single-button]',
      getAcquaintedSingleButtonComponent
    )
    .replace('[page-preview-for-you]', pagePreviewForYouComponent)

  return rendered
}
