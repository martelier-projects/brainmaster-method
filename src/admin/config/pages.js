import seo from './seo.js'
import flexibles from './flexibles/index.js'

export default {
  label: "Pagina's",
  name: 'pages',
  files: [
    {
      label: 'Slapen',
      name: 'sleep',
      file: 'src/_data/sleep.yaml',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
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
    },
  ],
}
