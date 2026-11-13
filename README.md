# Bot Farm Case Studies

A static website that presents 15 sourced case studies of bot farms, troll networks, and coordinated inauthentic behavior used to manipulate public opinion online.

## Features

- Fifteen documented international case studies
- Filtering by operation type and sorting by date, region, or evidence
- Shareable detail views at `#case/<case-id>`
- Primary-source links for every case
- A full web article and Substack-ready Markdown draft for the Internet Research Agency case
- A `substackUrl` field on every case in `script.js`; add the published URL to enable its **Read on Substack** button

## Articles

Long-form case studies use the same editorial structure: what happened, how the
operation worked, how it was established, what remains unproven, why the case
matters, and sources. The first article is available at
`articles/internet-research-agency.html`; its Substack-ready source is
`articles/internet-research-agency.md`.

## Local Preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

Production: [signal-casebook.vercel.app](https://signal-casebook.vercel.app)

The site is deployed to Vercel from the static files in this repository.
