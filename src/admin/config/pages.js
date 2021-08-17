import seo from './seo.js'
import flexibles from './flexibles/index.js'

export default {
  label: "Pagina's",
  name: 'pages',
  create: true,
  folder: 'src/pages',
  editor: {
    preview: false,
  },
  summary: '{{fields.title}}',
  fields: [
    {
      label: 'Index in Search-engines (Google)',
      name: 'indexPage',
      widget: 'boolean',
      default: true,
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'URL',
      name: 'permalink',
      widget: 'string',
      required: true,
      default: '/pagina-titel/',
      hint: 'Begin en eindig met een /',
    },
    {
      label: 'Template',
      name: 'layout',
      widget: 'select',
      options: [
        {
          label: 'Default (zoals een normale text pagina)',
          value: 'layouts/default-template.njk',
        },
        { label: 'Thema pagina', value: 'layouts/theme-page.njk' },
      ],
      default: 'layouts/default-template.njk',
    },
    {
      label: 'Home Section',
      name: 'sections',
      widget: 'list',
      types: flexibles,
      collapsed: false,
    },
    seo,
  ],
}
