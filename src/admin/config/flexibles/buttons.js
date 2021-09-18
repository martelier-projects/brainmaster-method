export default {
  label: 'Buttons',
  name: 'buttons',
  summary: 'Buttons',
  widget: 'list',
  fields: [
    {
      widget: 'list',
      label: 'Buttons',
      name: 'buttons',
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
          label: 'Link',
          name: 'link',
          widget: 'string',
          required: false,
          hint:
            'Use to link to a page or a section. In case of a section, find the ID in the HTML and start with a #',
        },
      ],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'buttons',
    },
  ],
}
