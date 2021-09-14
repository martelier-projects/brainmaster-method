---
indexPage: true
title: test
permalink: /test/
layout: layouts/default-template.njk
header:
  illustration: none
sections:
  - type: preview
    component: preview
    title: Preview - Title
    description: Preview - Description
    linkLabel: Preview - Link label
    linkUrl: /test-preview/
    image: /assets/images/mock.jpg
  - type: topics
    showTopics: true
    component: topics
    topics:
      - title: Topics - Title
        text: Topics - Text
        icon: Slapen
  - type: rich-text
    show: true
    component: rich-text
    text: Rich Text
seo:
  title: SEO - Page Titel
  description: SOE - Page Description
---
