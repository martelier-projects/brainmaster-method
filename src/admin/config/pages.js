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
      label:
        'Thema-pagina Header (alleen gebruiken als de template "Thema pagina" is)',
      name: 'header',
      widget: 'object',
      summary:
        'Thema-pagina Header (alleen gebruiken als de template "Thema pagina" is)',
      collapsed: true,
      fields: [
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
          required: false,
          hint: 'Alleen bij template X',
        },
        {
          label: 'Illustration',
          name: 'illustration',
          widget: 'select',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Home',
              value: 'home',
            },
          ],
          default: 'none',
        },
        {
          label: 'Header Links',
          name: 'links',
          widget: 'list',
          multiple: true,
          create: true,
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              required: true,
            },
            {
              label: 'URL',
              name: 'href',
              widget: 'string',
              required: true,
            },
            {
              label: 'Special ID',
              name: 'id',
              widget: 'string',
              required: false,
              hint:
                'Plaats de text "plan-kennismaking" als het gaat om de plan kennismaking knop (voor SEO)',
            },
          ],
        },
      ],
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
