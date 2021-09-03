export default {
  label: 'Embed',
  name: 'embed',
  widget: 'object',
  summary: 'Embed',
  widget: 'list',
  fields: [
    {
      label: 'Show block',
      name: 'show',
      widget: 'boolean',
      default: true,
    },
    {
      label: 'Embed code',
      name: 'embed',
      widget: 'text',
      required: true,
      hint:
        'Plaats de embed code hier. Dit is meestal een <script> of een <iframe>',
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'embed',
    },
  ],
}
