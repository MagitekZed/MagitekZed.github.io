# ZeD-T Labs

Zach Dando's hobby portfolio, live at **https://zedtlabs.dev/**.

This repo is the GitHub user site, so every project with Pages turned on is also
served at `https://zedtlabs.dev/<repo>/`. Only the projects listed in
`projects.js` appear on the page.

It's plain HTML, CSS and JavaScript with no build step and no dependencies.
GitHub Pages serves the files directly.

## Adding or changing a project

Edit **[`projects.js`](projects.js)** and add one block to the `projects` array:

```js
{
  title: "My New Thing",
  repo: "My-New-Thing",           // GitHub repo name under the owner
  summary: "One or two plain sentences about what it does.",
  category: "tools",              // a key from `categories`
  updated: "2026-11-01",          // YYYY-MM-DD, drives the log's sort
  // optional:
  status: "live",                 // live, cli, desktop, dev or code
  featured: true,                 // big card with a screenshot
  image: "img/My-New-Thing.webp", // 1200x750 (16:10) screenshot for featured cards
  tags: ["three.js", "game"],
  private: true,                  // hides the source link
  site: "https://example.com/",   // only if it isn't https://zedtlabs.dev/<repo>/
},
```

Commit and push; Pages redeploys automatically. The field reference is in the
comment at the top of `projects.js`.

### Writing summaries

Plain language and real numbers. No em dashes, no slogans, nothing that reads
like a press release.

## Page sections

- **Intro:** name, short bio, contact links and counts (worked out from the data).
- **Featured:** every project with `featured: true`, in file order.
- **Lab log:** every project, newest first, with category filters and search.
- **Notes:** how the projects get made.

Light and dark themes follow the system setting; the `[theme]` button in the
header overrides it and remembers the choice.

## Files

- `index.html`: markup and styles.
- `projects.js`: **the data you edit.**
- `app.js`: rendering, filters, search and the theme toggle.
- `img/`: featured screenshots and the link-preview image (`og.jpg`).
- `CNAME`: the custom domain (`zedtlabs.dev`).
- `.nojekyll`: tells Pages to serve files as-is.
