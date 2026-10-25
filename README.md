# Bot Farm Case Studies

A static website that presents 15 sourced case studies of bot farms, troll networks, and coordinated inauthentic behavior used to manipulate public opinion online.

## Features

- Fifteen documented international case studies
- Filtering by operation type and sorting by date, region, or evidence
- Shareable detail views at `#case/<case-id>`
- Primary-source links for every case
- A `substackUrl` field on every case in `script.js`; add the published URL to enable its **Read on Substack** button

## Local Preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

The repository includes a GitHub Pages workflow. After pushing to GitHub, enable GitHub Pages with **Source: GitHub Actions** in the repository settings if it is not already enabled.
