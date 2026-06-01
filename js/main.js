/* ============================================================
   Paws The Time — main.js
   Renders the episode grid and wires up nav interactions.

   TO ADD A NEW EPISODE: add one object to the EPISODES array
   below. Drop the thumbnail in /assets and the audio in /audio,
   then point `thumb` and `audio` at them.

   To mark an episode as not-yet-released, set `comingSoon: true`
   and leave `audio`/`thumb` out — it renders a "coming soon" card.
   ============================================================ */

const EPISODES = [
  {
    num: 1,
    emoji: "🐯",
    title: "The Amazing Tiger",
    desc: "Meet the biggest cat on Earth — with stripes like no other and a roar you can hear from two miles away!",
    thumb: "assets/episode-1-thumbnail.png",
    audio: "audio/ep01-tiger.m4a",
  },
  {
    num: 2,
    emoji: "🦅",
    title: "The Amazing Eagle",
    desc: "Soar up high with a bird whose eyes are so sharp it can spot a tiny mouse from way, way up in the sky!",
    thumb: "assets/episode-2-thumbnail.png",
    audio: "audio/ep02-eagle.m4a",
  },
  {
    num: 3,
    emoji: "🦊",
    title: "The Amazing Fox",
    desc: "Discover the clever little trickster of the forest who can hear a mouse squeak under the snow!",
    thumb: "assets/episode-3-thumbnail.png",
    audio: "audio/ep03-fox.m4a",
  },
  {
    num: 4,
    emoji: "🐻‍❄️",
    title: "The Amazing Polar Bear",
    desc: "Splash into the freezing Arctic with a giant bear that has black skin and see-through fur to stay toasty warm!",
    thumb: "assets/episode-4-thumbnail.png",
    audio: "audio/ep04-polar-bear.m4a",
  },
  {
    num: 5,
    emoji: "🦉",
    title: "The Amazing Owl",
    desc: "Glide silently through the night with a bird that can spin its head almost all the way around!",
    thumb: "assets/episode-5-thumbnail.png",
    audio: "audio/ep05-owl.m4a",
  },
  {
    num: 6,
    emoji: "🐆",
    title: "The Amazing Cheetah",
    desc: "Get ready for the fastest land animal on the planet — it goes from zero to super-speedy in just three seconds!",
    thumb: "assets/episode-6-thumbnail.png",
    audio: "audio/ep06-cheetah.m4a",
  },
  {
    num: 7,
    emoji: "🐺",
    title: "The Amazing Wolf",
    desc: "Howl along with the ultimate team player that hunts, plays, and protects its pack just like family!",
    thumb: "assets/episode-7-thumbnail.png",
    audio: "audio/ep07-wolf.m4a",
  },
  {
    num: 8,
    emoji: "🦎",
    title: "The Amazing Lizard",
    desc: "Stick around for a scaly superstar that can climb walls, change colors, and even regrow its own tail!",
    thumb: "assets/episode-8-thumbnail.png",
    audio: "audio/ep08-lizard.m4a",
  },
  {
    num: 9,
    emoji: "🐬",
    title: "The Amazing Dolphin",
    desc: "Dive into the ocean with one of the smartest animals in the sea — it chats using clicks and whistles!",
    thumb: "assets/episode-9-thumbnail.png",
    audio: "audio/ep09-dolphin.m4a",
  },
  {
    num: 10,
    emoji: "🎬",
    title: "Coming Soon!",
    desc: "Shhh… this episode is still being recorded! A brand-new amazing animal is on its way — check back soon to find out who it is.",
    comingSoon: true,
  },
  {
    num: 11,
    emoji: "🦈",
    title: "The Amazing Shark",
    desc: "Sink your teeth into the ocean's coolest hunter — it has been swimming the seas since before the dinosaurs!",
    thumb: "assets/episode-11-thumbnail.png",
    audio: "audio/ep11-shark.m4a",
  },
  {
    num: 12,
    emoji: "🐙",
    title: "The Amazing Octopus",
    desc: "Squish into the deep with an eight-armed genius that has three hearts and bright blue blood!",
    thumb: "assets/episode-12-thumbnail.png",
    audio: "audio/ep12-octopus.m4a",
  },
];

/* ---------- Render the episode cards ---------- */
function renderEpisodes() {
  const grid = document.getElementById("ep-grid");
  if (!grid) return;

  grid.innerHTML = EPISODES.map((ep) => {
    if (ep.comingSoon) {
      return `
      <article class="ep-card ep-card--soon">
        <div class="ep-thumb-wrap ep-thumb-wrap--soon">
          <div class="soon-art">
            <span class="soon-paw">🐾</span>
            <span class="soon-text">Coming&nbsp;Soon!</span>
          </div>
          <span class="ep-badge">Episode ${ep.num}</span>
        </div>
        <div class="ep-body">
          <h3 class="ep-title">${ep.emoji} ${ep.title}</h3>
          <p class="ep-desc">${ep.desc}</p>
        </div>
      </article>`;
    }

    return `
      <article class="ep-card">
        <div class="ep-thumb-wrap">
          <img src="${ep.thumb}" alt="Episode ${ep.num}: ${ep.title}" loading="lazy" width="600" height="400">
          <span class="ep-badge">Episode ${ep.num}</span>
        </div>
        <div class="ep-body">
          <h3 class="ep-title">${ep.emoji} ${ep.title}</h3>
          <p class="ep-desc">${ep.desc}</p>
          <div class="ep-audio">
            <audio controls preload="metadata">
              <source src="${ep.audio}" type="audio/mp4">
              Your browser doesn't support audio — you can
              <a href="${ep.audio}">download this episode</a> instead.
            </audio>
          </div>
        </div>
      </article>`;
  }).join("");
}

/* ---------- Mobile nav toggle ---------- */
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderEpisodes();
  setupNav();
  document.getElementById("year").textContent = new Date().getFullYear();
});
