# Future features — Paws The Time

A backlog of ideas not yet built. Nothing here is live on the site.

## Per-episode listen counter

**Goal:** show (or privately track) how many times each episode has been played.

**Status:** deferred (decided 2026-05-31).

**Key constraint:** the site is static (GitHub Pages), so it cannot store a
count itself, and browser JavaScript cannot write to a file on the server. A
shared, global count must live in a small hosted store. (`localStorage` only
counts plays on one device and resets when cleared — not a true total.)

**Chosen definition of a "listen":** a press of the play button (simplest;
includes quick taps).

**How it would work:**
- On `play` → `fetch()` a "+1" to that episode's counter (the write).
- On page load → `fetch()` the current number to display (the read).
- Store only one integer per episode — no visitor data (privacy-clean for a
  kids' audience).

**Recommended implementation:** a ~15-line **Cloudflare Worker + KV** counter
(free, owned by us, reliable) with two routes — GET (read) and POST
(increment). Alternatives: Supabase / Firebase (also give a dashboard), or a
no-account hit-counter service (less reliable — numbers can vanish).

**Caveat:** counts are approximate and gameable (refreshes, repeat plays) —
fine for a fun kids' site, not audit-grade analytics.
