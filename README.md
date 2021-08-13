# chookity-pok.io

My personal website and blog. The theme is based off [gatsby-starter-glass](https://github.com/yinkakun/gatsby-starter-glass)
with tweaks such as converting to typescript, graphql codegen and other personal thematic changes.

To run locally, `yarn` and then `yarn dev`. Then navigate to http://localhost:8000.

[View Live Demo](https://chookity-pok-io.vercel.app/)

![demo site screenshot](./screenshot.png)

## Features

- Fully responsive
- SEO metadata and Open Graph tags
- Maximized lighthouse score
- Easy to deploy
- Syntax highlighting via PrismJS

## Configuration

Within gatsby-config.js, you can specify information about your site (metadata) like the site title and description to properly generate meta tags.

```js
// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `Vui Chee's Personal Website`,
    author: {
      name: `Vui Chee`,
      summary: `Searching for meaning.`,
    },
    siteUrl: `https://chookity-pok-io.vercel.app/`,
    social: {
    },
  },

  // ...
}
```
## Manually Editing contents

### Blog Posts

Blog contents can be updated in markdown format at `content/blog`. Delete placeholder posts and start blogging.

```md
---
title: Hello World
date: "2021-05-01"
description: "Hello World"
---

This top portion is the beginning of the post and will show up as the excerpt on the homepage.
```

### Pages

Homepage intro, Contact, and About page content can be updated in Markdown format at `content/pages`.
