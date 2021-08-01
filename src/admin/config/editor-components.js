export default () => {
  // <!-- Netlify Markdown Blocks -->
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'testimonials',

    // Visible label
    label: 'Testimonials',

    // Pattern to identify a block as being an instance of this component
    pattern: /^testimonials (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[testimonials]`
    },
  })
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'timeline',

    // Visible label
    label: 'Timeline',

    // Pattern to identify a block as being an instance of this component
    pattern: /^timeline (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[timeline]`
    },
  })
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'pjotr',

    // Visible label
    label: 'Pjotr',

    // Pattern to identify a block as being an instance of this component
    pattern: /^pjotr (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[pjotr]`
    },
  })
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'topics',

    // Visible label
    label: 'Topics',

    // Pattern to identify a block as being an instance of this component
    pattern: /^topics (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[topics]`
    },
  })
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'faq',

    // Visible label
    label: 'FAQ',

    // Pattern to identify a block as being an instance of this component
    pattern: /^faq (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[faq]`
    },
  })
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'get-acquainted',

    // Visible label
    label: 'Kennismaking',

    // Pattern to identify a block as being an instance of this component
    pattern: /^get-acquainted (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[get-acquainted]`
    },
  })
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'get-acquainted-single-button',

    // Visible label
    label: 'Kennismaking (single button)',

    // Pattern to identify a block as being an instance of this component
    pattern: /^get-acquainted-single-button (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[get-acquainted-single-button]`
    },
  })
  window.CMS.registerEditorComponent({
    // Internal id of the component
    id: 'page-preview-for-you',

    // Visible label
    label: 'page-preview - Voor jou',

    // Pattern to identify a block as being an instance of this component
    pattern: /^page-preview-for-you (\S+)$/,

    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `[page-preview-for-you]`
    },
  })
}
