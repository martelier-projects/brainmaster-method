import flexibles from './flexibles/index.js'

export default [
  {
    label: 'pagina - Home',
    name: 'homePage',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/homePage/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/homePage/pageHeader.yaml',
        name: 'content',
        widget: 'list',
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
            widget: 'list',
            label: 'Links',
            name: 'links',
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
        label: 'Improve text',
        file: 'src/_data/homePage/improveText.yaml',
        name: 'Improve text',
        widget: 'list',
        fields: [
          {
            label: 'Show improve text',
            name: 'showImproveText',
            widget: 'boolean',
            default: true,
          },
          {
            label: 'Visual order',
            name: 'order',
            widget: 'select',
            options: ['image-text', 'text-image'],
            default: ['image-text'],
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
        ],
      },
      {
        label: 'Quotes',
        file: 'src/_data/homePage/quotes.yaml',
        name: 'quotes',
        fields: [
          {
            label: 'Show Quotes',
            name: 'showQuotes',
            widget: 'boolean',
            default: true,
          },
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
          },
        ],
      },
      {
        label: 'Why text',
        file: 'src/_data/homePage/whyText.yaml',
        name: 'Why text',
        widget: 'list',
        fields: [
          {
            label: 'Show text why',
            name: 'showTextWhy',
            widget: 'boolean',
            default: true,
          },
          {
            label: 'Visual order',
            name: 'order',
            widget: 'select',
            options: ['image-text', 'text-image'],
            default: ['image-text'],
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
        ],
      },
      {
        label: 'Blog preview',
        file: 'src/_data/homePage/blogPreview.yaml',
        name: 'Blog preview',
        widget: 'list',
        fields: [
          {
            label: 'Show blog preview',
            name: 'showBlogPreview',
            widget: 'boolean',
            default: true,
          },
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: true,
          },
        ],
      },
      {
        label: 'Page preview',
        file: 'src/_data/homePage/pagePreview.yaml',
        name: 'Page preview',
        widget: 'list',
        fields: [
          {
            label: 'Show page preview',
            name: 'showPagePreview',
            widget: 'boolean',
            default: true,
          },
          {
            label: 'Select page',
            name: 'page',
            widget: 'select',
            options: ['Voor jou', 'Voor bedrijven', 'Voor zorgverleners'],
            default: ['Voor jou'],
          },
        ],
      },
      {
        label: 'FAQ',
        file: 'src/_data/homePage/faq.yaml',
        name: 'FAQ',
        widget: 'list',
        fields: [
          {
            label: 'Show FAQ',
            name: 'showFaq',
            widget: 'boolean',
            default: true,
          },
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: true,
          },
        ],
      },
      {
        label: 'Flexible content',
        file: 'src/_data/homePage/flexibleContent.yaml',
        name: 'flexible content',
        widget: 'list',
        collapsed: false,
        fields: [
          {
            label: 'Flexible content sections',
            name: 'sections',
            widget: 'list',
            types: flexibles,
            collapsed: false,
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Voor jou',
    name: 'forYou',
    editor: {
      preview: true,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/forYou/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/forYou/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/forYou/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            modes: ['rich_text'],
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
          },
        ],
      },
      {
        label: 'Flexible content',
        file: 'src/_data/forYou/flexibleContent.yaml',
        name: 'flexible content',
        widget: 'list',
        collapsed: false,
        fields: [
          {
            label: 'Flexible content sections',
            name: 'sections',
            widget: 'list',
            types: flexibles,
            collapsed: false,
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Contact',
    name: 'contact',
    editor: {
      preview: true,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/contact/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/contact/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/contact/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            modes: ['rich_text'],
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
            hint: 'Topics and FAQ block not available on this page',
          },
          {
            label: 'Appointment title',
            name: 'appointmentTitle',
            widget: 'text',
            required: true,
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Voor bedrijven',
    name: 'forCompanies',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/forCompanies/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/forCompanies/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/forCompanies/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
          },
        ],
      },
      {
        label: 'Flexible content',
        file: 'src/_data/forCompanies/flexibleContent.yaml',
        name: 'flexible content',
        widget: 'list',
        collapsed: false,
        fields: [
          {
            label: 'Flexible content sections',
            name: 'sections',
            widget: 'list',
            types: flexibles,
            collapsed: false,
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Voor zorgverleners',
    name: 'forCaregivers',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/forCaregivers/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/forCaregivers/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/forCaregivers/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
          },
        ],
      },
      {
        label: 'Flexible content',
        file: 'src/_data/forCaregivers/flexibleContent.yaml',
        name: 'flexible content',
        widget: 'list',
        collapsed: false,
        fields: [
          {
            label: 'Flexible content sections',
            name: 'sections',
            widget: 'list',
            types: flexibles,
            collapsed: false,
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - 404',
    name: '404',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Page Header',
        file: 'src/_data/errorPage/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/errorPage/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Privacy statement',
    name: 'privacy statement',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/privacyStatement/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/privacyStatement/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/privacyStatement/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Cookies',
    name: 'cookies',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/cookies/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/cookies/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/cookies/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Login',
    name: 'login',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/login/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/login/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
            required: false,
          },
        ],
      },
      {
        label: 'Content',
        file: 'src/_data/login/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Algemene voorwaarden',
    name: 'termsAndConditions',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/termsAndConditions/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/termsAndConditions/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
        label: 'Content',
        file: 'src/_data/termsAndConditions/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'markdown',
            required: true,
            buttons: [
              'bold',
              'italic',
              'link',
              'heading-two',
              'heading-three',
              'heading-four',
              'heading-five',
              'heading-six',
              'bulleted-list',
              'numbered-list',
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - Blog overview',
    name: 'blogOverview',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/blogOverview/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
    ],
  },
  {
    label: 'pagina - FAQ',
    name: 'faq-page',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Meta',
        file: 'src/_data/faqPage/meta.yaml',
        name: 'meta',
        fields: [
          {
            label: 'Page title',
            name: 'title',
            widget: 'text',
            required: true,
          },
          {
            label: 'Page description',
            name: 'description',
            widget: 'text',
            required: true,
          },
        ],
      },
      {
        label: 'Page Header',
        file: 'src/_data/faqPage/pageHeader.yaml',
        name: 'header',
        widget: 'list',
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
            required: false,
          },
        ],
      },
      {
        label: 'Content',
        file: 'src/_data/faqPage/content.yaml',
        name: 'content',
        widget: 'list',
        fields: [
          {
            label: 'Home title',
            name: 'homeTitle',
            widget: 'string',
            required: true,
          },
          {
            label: 'Voor jou title',
            name: 'forYouTitle',
            widget: 'string',
            required: true,
          },
          {
            label: 'Voor bedrijven title',
            name: 'forCompaniesTitle',
            widget: 'string',
            required: true,
          },
          {
            label: 'Voor zorgeverleners title',
            name: 'forCaregiversTitle',
            widget: 'string',
            required: true,
          },
        ],
      },
    ],
  },
  {
    label: 'Blog',
    name: 'blog',
    folder: 'src/blog',
    create: true,
    editor: {
      preview: false,
    },
    fields: [
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
      },
      {
        label: 'Description',
        name: 'description',
        widget: 'string',
      },
      {
        label: 'Image',
        name: 'image',
        widget: 'image',
      },
      {
        label: 'Author',
        name: 'author',
        widget: 'string',
      },
      {
        label: 'Authors image',
        name: 'authorImage',
        widget: 'image',
      },
      {
        label: 'Publish Date',
        name: 'date',
        widget: 'datetime',
      },
      {
        label: 'Body',
        name: 'body',
        widget: 'markdown',
      },
      {
        label: 'Layout',
        name: 'layout',
        widget: 'hidden',
        default: 'layouts/blog.njk',
      },
      {
        label: 'Tags',
        name: 'tags',
        widget: 'hidden',
        default: 'blog',
      },
      {
        label: 'Flexible content',
        name: 'sections',
        widget: 'list',
        types: flexibles,
        collapsed: false,
      },
    ],
  },
  {
    label: 'global - Settings',
    name: 'settings',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Navigation',
        name: 'items',
        file: 'src/_data/mainNav.yaml',
        fields: [
          {
            label: 'Nav Items',
            name: 'items',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Title',
                name: 'label',
                widget: 'string',
              },
              {
                label: 'URL',
                name: 'url',
                widget: 'hidden',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'global - Footer',
    name: 'footer',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Link list one',
        name: 'link list one',
        file: 'src/_data/footer/linkListOne.yaml',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
          },
          {
            label: 'Links',
            name: 'links',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            max: 5,
            hint: 'Voeg max 5 links toe.',
            fields: [
              {
                label: 'Label',
                name: 'label',
                widget: 'string',
              },
              {
                label: 'URL',
                name: 'url',
                widget: 'string',
              },
            ],
          },
        ],
      },
      {
        label: 'Link list two',
        name: 'link list two',
        file: 'src/_data/footer/linkListTwo.yaml',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
          },
          {
            label: 'Links',
            name: 'links',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            max: 5,
            hint: 'Voeg max 5 links toe.',
            fields: [
              {
                label: 'Label',
                name: 'label',
                widget: 'string',
              },
              {
                label: 'URL',
                name: 'url',
                widget: 'string',
              },
            ],
          },
        ],
      },
      {
        label: 'Link list three',
        name: 'link list three',
        file: 'src/_data/footer/linkListThree.yaml',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
          },
          {
            label: 'Links',
            name: 'links',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            max: 5,
            hint: 'Voeg max 5 links toe.',
            fields: [
              {
                label: 'Label',
                name: 'label',
                widget: 'string',
              },
              {
                label: 'URL',
                name: 'url',
                widget: 'string',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        name: 'contact',
        file: 'src/_data/footer/contact.yaml',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            hint: 'Titel wordt niet getoond, wel gebruikt voor screenreaders',
          },
          {
            label: 'Slogan',
            name: 'slogan',
            widget: 'string',
          },
          {
            label: 'Email URL',
            name: 'emailUrl',
            widget: 'string',
            hint: 'Voeg emailadres toe',
          },
          {
            label: 'Email Label',
            name: 'emailLabel',
            widget: 'string',
            hint: 'Email die wordt getoond',
          },
          {
            label: 'Tel URL',
            name: 'telUrl',
            widget: 'string',
            hint: 'Voeg telefoonnummer toe (geen spaties).',
          },
          {
            label: 'Tel Label',
            name: 'telLabel',
            widget: 'string',
            hint: 'Telefoonnummer die wordt getoond',
          },
        ],
      },
      {
        label: 'Sub footer',
        name: 'sub footer',
        file: 'src/_data/footer/subFooter.yaml',
        fields: [
          {
            label: 'Links',
            name: 'links',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Label',
                name: 'label',
                widget: 'string',
              },
              {
                label: 'URL',
                name: 'url',
                widget: 'string',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'global - Social proof (Quotes/testimonials)',
    name: 'quotes',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Quotes',
        name: 'quotes',
        file: 'src/_data/quotes.yaml',
        fields: [
          {
            label: 'Quote',
            name: 'quotes',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Text',
                name: 'text',
                widget: 'text',
              },
              {
                label: 'Author',
                name: 'author',
                widget: 'string',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'global - Traject timeline',
    name: 'timeline',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Timeline',
        name: 'timeline',
        file: 'src/_data/timeline.yaml',
        fields: [
          {
            label: 'Timeline item',
            name: 'timelineItem',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Title',
                name: 'title',
                widget: 'text',
              },
              {
                label: 'Text',
                name: 'text',
                widget: 'text',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'global - People',
    name: 'people',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Pjotr',
        name: 'pjotr',
        file: 'src/_data/pjotr.yaml',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'text',
          },
          {
            label: 'Text',
            name: 'text',
            widget: 'text',
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
        ],
      },
    ],
  },
  {
    label: 'global - FAQ',
    name: 'faq',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'FAQ - home',
        name: 'faq-home',
        file: 'src/_data/faq/home.yaml',
        fields: [
          {
            label: 'FAQ Item',
            name: 'faqItems',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Question',
                name: 'question',
                widget: 'text',
              },
              {
                label: 'Answer',
                name: 'answer',
                widget: 'text',
              },
            ],
          },
        ],
      },
      {
        label: 'FAQ - Voor jou',
        name: 'faq-voor-jou',
        file: 'src/_data/faq/forYou.yaml',
        fields: [
          {
            label: 'FAQ Item',
            name: 'faqItems',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Question',
                name: 'question',
                widget: 'text',
              },
              {
                label: 'Answer',
                name: 'answer',
                widget: 'text',
              },
            ],
          },
        ],
      },
      {
        label: 'FAQ - Voor bedrijven',
        name: 'faq-voor-bedrijven',
        file: 'src/_data/faq/forCompanies.yaml',
        fields: [
          {
            label: 'FAQ Item',
            name: 'faqItems',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Question',
                name: 'question',
                widget: 'text',
              },
              {
                label: 'Answer',
                name: 'answer',
                widget: 'text',
              },
            ],
          },
        ],
      },
      {
        label: 'FAQ - Voor zorgverleners',
        name: 'faq-voor-zorgverleners',
        file: 'src/_data/faq/forCaregivers.yaml',
        fields: [
          {
            label: 'FAQ Item',
            name: 'faqItems',
            widget: 'list',
            allow_add: true,
            collapsed: true,
            fields: [
              {
                label: 'Question',
                name: 'question',
                widget: 'text',
              },
              {
                label: 'Answer',
                name: 'answer',
                widget: 'text',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'global - Kennismaking',
    name: 'getAcquainted',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Kennismaking',
        name: 'getAcquainted',
        file: 'src/_data/getAcquainted.yaml',
        fields: [
          {
            label: 'Text',
            name: 'text',
            widget: 'text',
          },
          {
            label: 'Button label',
            name: 'label',
            widget: 'text',
          },
        ],
      },
    ],
  },
  {
    label: 'global - Kennismaking (single button)',
    name: 'getAcquaintedSingleButton',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Kennismaking - single button',
        name: 'getAcquainted',
        file: 'src/_data/getAcquaintedSingleButton.yaml',
        fields: [
          {
            label: 'Button label',
            name: 'label',
            widget: 'text',
          },
        ],
      },
    ],
  },
  {
    label: 'global - pages preview',
    name: 'pages preview',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Voor jou',
        name: 'forYouPage',
        file: 'src/_data/pagesPreview/forYou.yaml',
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
        ],
      },
    ],
  },
  {
    label: 'global - topics',
    name: 'topics',
    editor: {
      preview: false,
    },
    files: [
      {
        label: 'Topics - Home',
        name: 'topics home',
        file: 'src/_data/topics/home.yaml',
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
                label: 'Link',
                name: 'href',
                widget: 'string',
                required: false,
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
        ],
      },
      {
        label: 'Topics - Voor jou',
        name: 'topics for you',
        file: 'src/_data/topics/forYou.yaml',
        widget: 'list',
        fields: [
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
                label: 'Link',
                name: 'href',
                widget: 'string',
                required: false,
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
        ],
      },
      {
        label: 'Topics - Voor bedrijven',
        name: 'topics for companies',
        file: 'src/_data/topics/forCompanies.yaml',
        widget: 'list',
        fields: [
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
                label: 'Link',
                name: 'href',
                widget: 'string',
                required: false,
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
        ],
      },
      {
        label: 'Topics - Voor zorgeverleners',
        name: 'topics for caregivers',
        file: 'src/_data/topics/forCaregivers.yaml',
        widget: 'list',
        fields: [
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
                label: 'Link',
                name: 'href',
                widget: 'string',
                required: false,
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
        ],
      },
    ],
  },
]
