# tiim

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e2fe0fb-4f7c-4f9b-abc2-07caf4e53bef/deploy-status)](https://app.netlify.com/sites/priceless-northcutt-bc124e/deploys)

## Setup

- Add `.env` file
- Add localhost domain to `.env` (default for Eleventy is `http://localhost:8081/`)

### Run project locally

- Start CMS: `npx netlify-cms-proxy-server`
- Build and watch the assets folder: `yarn run watch:assets`
- Build and watch with Eleventy: `yarn run watch:data`

- Site will be hosted on: [http://localhost:8082](http://localhost:8082)
- CMS will be hosted on: [http://localhost:8082/admin/#/](http://localhost:8082/admin/#/)

## Mock content

To used the mock content:

- Add `.env` file
- Add `MOCK_CONTENT=true` to `.env` file
- Restart `watch` command
