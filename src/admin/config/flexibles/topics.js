export default {
  label: 'Topics',
  name: 'topics',
  widget: 'object',
  summary: 'Topics | {{fields.title}}',
  widget: 'list',
  fields: [
    {
      label: 'Show topics',
      name: 'showTopics',
      widget: 'boolean',
      default: true,
    },
    {
      widget: 'list',
      label: 'Topics',
      name: 'topics',
      multiple: true,
      create: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
          required: true,
        },
        {
          label: 'Icon',
          name: 'icon',
          widget: 'select',
          options: [
            'Kennismaking',
            'Module',
            'Productief',
            'Slapen',
            'Traject',
            'Weerbaarheid',
          ],
          required: true,
        },
      ],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'topics',
    },
  ],
}
