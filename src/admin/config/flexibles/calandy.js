export default {
  label: 'Calandy button',
  name: 'calandy-button',
  widget: 'object',
  summary: 'Calandy button | {{fields.type}}',
  widget: 'list',
  fields: [
    {
      label: 'Button Type',
      name: 'buttonType',
      widget: 'select',
      options: [
        {
          label: 'Adviesgesprek',
          value: 'adviesgesprek',
        },
        {
          label: 'Kennismaking',
          value: 'kennismaking',
        },
      ],
      default: 'adviesgesprek',
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'calandy-button',
    },
  ],
}
