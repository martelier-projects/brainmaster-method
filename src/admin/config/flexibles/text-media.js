export default {
  label: 'Text media',
  name: 'text-media',
  widget: 'object',
  summary: 'Text media | {{fields.title}}',
  widget: 'list',
  fields: [
    {
      label: 'Show block',
      name: 'show',
      widget: 'boolean',
      default: true,
    },
    {
      label: 'Visual order',
      name: 'order',
      widget: 'select',
      options: ['image-text', 'text-image'],
      default: 'image-text',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      media_library: {
        config: {
          multiple: true,
        },
      },
    },
    {
      label: 'Image alt',
      name: 'imgAlt',
      widget: 'string',
      required: true,
    },
    {
      label: 'Image caption',
      name: 'imgCaption',
      widget: 'string',
      required: false,
    },
    {
      widget: 'list',
      label: 'Sections',
      name: 'sections',
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
      ],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'text-media',
    },
  ],
}
