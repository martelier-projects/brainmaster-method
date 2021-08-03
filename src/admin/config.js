import oldCollections from './config/old-colletions.js'
import identity from './config/identity.js'
import editorComponents from './config/editor-components.js'

import pages from './config/pages.js'
console.log('pages: ', pages)

// Create config
const config = {
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    media_folder: 'src/assets/images',
    public_folder: '/assets/images',
    local_backend: true,
    collections: [...oldCollections, pages],
  },
}

// Enable Netlify Identity.
identity()

window.initCMS(config)

// Initialize editor components.
editorComponents()
