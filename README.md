# Paws The Time 🐾

A single-page website for **Paws The Time**, a fun animal podcast for kids
(ages 6–12) hosted by **Elizabeth Murphy**.

> *Animals aren't boring… they're AWESOME!*

Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.
It runs as static files and is ready for **GitHub Pages**.

---

## File structure

```
liz-podcast/
├── index.html                ← the whole page
├── .nojekyll                 ← tells GitHub Pages to serve files as-is
├── README.md                 ← this file
├── css/
│   └── styles.css            ← all styling + animations
├── js/
│   └── main.js               ← episode data + page interactions
├── assets/                   ← images (web-optimized)
│   ├── paws-the-time-logo.png
│   ├── host-avatar.png
│   ├── hero-banner.jpg
│   ├── episode-1-thumbnail.png … episode-12-thumbnail.png  (no episode-10 — see below)
│   └── originals/            ← full-resolution source images (not used by the site)
├── audio/                    ← episode audio (.m4a), web-ready clean names
│   ├── ep01-tiger.m4a
│   ├── …
│   └── ep12-octopus.m4a
├── pdfs/                     ← (empty) drop episode script PDFs here if you add them later
└── episodes/                 ← ORIGINAL source recordings (not used by the site)
```

> **Notes:**
> - `episodes/` holds the original recordings with their original names
>   (including the two separate Cheetah parts). The site only reads from
>   `audio/`. You can safely delete `episodes/` if you don't need the originals.
> - `assets/originals/` holds the full-resolution images. The site uses the
>   downscaled copies in `assets/` (much faster to load). Safe to delete too.

---

## The episodes

The site shows **12 episode slots**. Episode 10 hasn't been recorded yet, so it
shows a friendly "Coming Soon!" card. The numbers match the artwork on each
thumbnail.

| #  | Animal      | Audio file            |
|----|-------------|-----------------------|
| 1  | Tiger       | `ep01-tiger.m4a`      |
| 2  | Eagle       | `ep02-eagle.m4a`      |
| 3  | Fox         | `ep03-fox.m4a`        |
| 4  | Polar Bear  | `ep04-polar-bear.m4a` |
| 5  | Owl         | `ep05-owl.m4a`        |
| 6  | Cheetah     | `ep06-cheetah.m4a` *(Parts 1 & 2 joined into one file)* |
| 7  | Wolf        | `ep07-wolf.m4a`       |
| 8  | Lizard      | `ep08-lizard.m4a`     |
| 9  | Dolphin     | `ep09-dolphin.m4a`    |
| 10 | *Coming soon* | — (not recorded yet) |
| 11 | Shark       | `ep11-shark.m4a`      |
| 12 | Octopus     | `ep12-octopus.m4a`    |

When Episode 10 is recorded, add the audio + thumbnail and flip its entry in
`js/main.js` from a "coming soon" card to a normal one (see below).

---

## Run it locally

It's just static files, so any of these work:

```bash
# Option 1 — open the file directly
open index.html

# Option 2 — a tiny local server (recommended; audio streams more reliably)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose your branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
5. Wait a minute, then visit `https://<your-username>.github.io/<repo-name>/`.

The `.nojekyll` file is already included so GitHub Pages serves every file
exactly as-is.

---

## Adding a new episode

Everything that drives the episode grid lives in **one array** at the top of
`js/main.js`. To add an episode:

1. **Add the thumbnail** to `assets/` (600×400 px keeps it small and fast), e.g.
   `assets/episode-13-thumbnail.png`.
2. **Add the audio** to `audio/`, e.g. `audio/ep13-penguin.m4a`.
3. **Add one object** to the `EPISODES` array in `js/main.js`:

   ```js
   {
     num: 13,
     emoji: "🐧",
     title: "The Amazing Penguin",
     desc: "A fun one-sentence description for kids!",
     thumb: "assets/episode-13-thumbnail.png",
     audio: "audio/ep13-penguin.m4a",
   }
   ```

That's it — the new card appears automatically.

### Marking an episode "Coming Soon"

For an episode that isn't recorded yet (like Episode 10 right now), leave out
`thumb` and `audio` and set `comingSoon: true`:

```js
{
  num: 10,
  emoji: "🎬",
  title: "Coming Soon!",
  desc: "Shhh… this episode is still being recorded!",
  comingSoon: true,
}
```

It renders a friendly placeholder card with no audio player. When you're ready
to release it, add the `thumb` + `audio` and remove `comingSoon`.

> **Keep images small.** Source artwork can be several MB each; that many large
> images can fail to load in the browser. Downscale thumbnails to ~600×400
> before adding them, e.g. `sips -Z 600 episode-13-thumbnail.png` on macOS.

---

## Joining audio that comes in parts

Episode 6 (Cheetah) arrived as two files and was merged into one with
[ffmpeg](https://ffmpeg.org/) (lossless — no re-encoding):

```bash
# list.txt contains one line per part:
#   file '/full/path/to/part-1.m4a'
#   file '/full/path/to/part-2.m4a'
ffmpeg -f concat -safe 0 -i list.txt -c copy audio/ep06-cheetah.m4a
```

---

## Colors

| Role        | Hex       |
|-------------|-----------|
| Primary     | `#87CEEB` (sky blue) |
| Secondary   | `#E05C00` (warm orange) |
| Accent      | `#2B8A3E` (forest green) |
| Background  | `#EEF8FF` (light sky) |
| Text        | `#1A1A1A` (dark charcoal) |

Defined as CSS variables at the top of `css/styles.css` — change them in one
place to re-theme the whole site.
