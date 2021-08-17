export default {
  label: 'Preview',
  name: 'preview',
  widget: 'object',
  summary: 'Preview | {{fields.title}}',
  widget: 'list',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'string',
      required: true,
    },
    {
      label: 'Link label',
      name: 'linkLabel',
      widget: 'string',
      required: true,
    },
    {
      label: 'Link URL',
      name: 'linkUrl',
      widget: 'string',
      required: true,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'preview',
    },
  ],
}
