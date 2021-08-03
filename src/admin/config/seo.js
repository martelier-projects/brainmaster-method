export default {
  label: 'SEO',
  name: 'seo',
  widget: 'object',
  fields: [
    {
      label: 'SEO - Page title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'SOE - Page description',
      name: 'description',
      widget: 'text',
      required: true,
    },
  ],
}
