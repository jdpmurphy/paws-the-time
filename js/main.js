/* ============================================================
   Paws The Time — main.js
   Renders the episode grid and wires up nav interactions.

   TO ADD A NEW EPISODE: add one object to the EPISODES array
   below. Drop the thumbnail in /assets and the audio in /audio,
   then point `thumb` and `audio` at them.

   Flags:
   - comingSoon: true  → "Coming Soon!" card, no audio (not yet recorded)
   - special: true     → badge reads "Special" instead of "Episode N"
   If a thumbnail file is missing, the card shows a friendly
   "Thumbnail coming soon" placeholder instead of a broken image.
   ============================================================ */

const EPISODES = [
  { num: 1,  emoji: "🐯", title: "The Amazing Tiger",
    desc: "Meet the biggest cat on Earth — with stripes like no other and a roar you can hear from two miles away!",
    thumb: "assets/episode-1-thumbnail.png", audio: "audio/ep01-tiger.m4a" },

  { num: 2,  emoji: "🦅", title: "The Amazing Eagle",
    desc: "Soar up high with a bird whose eyes are so sharp it can spot a tiny mouse from way, way up in the sky!",
    thumb: "assets/episode-2-thumbnail.png", audio: "audio/ep02-eagle.m4a" },

  { num: 3,  emoji: "🦊", title: "The Amazing Fox",
    desc: "Discover the clever little trickster of the forest who can hear a mouse squeak under the snow!",
    thumb: "assets/episode-3-thumbnail.png", audio: "audio/ep03-fox.m4a" },

  { num: 4,  emoji: "🐻‍❄️", title: "The Amazing Polar Bear",
    desc: "Splash into the freezing Arctic with a giant bear that has black skin and see-through fur to stay toasty warm!",
    thumb: "assets/episode-4-thumbnail.png", audio: "audio/ep04-polar-bear.m4a" },

  { num: 5,  emoji: "🦉", title: "The Amazing Owl",
    desc: "Glide silently through the night with a bird that can spin its head almost all the way around!",
    thumb: "assets/episode-5-thumbnail.png", audio: "audio/ep05-owl.m4a" },

  { num: 6,  emoji: "🐆", title: "The Amazing Cheetah",
    desc: "Get ready for the fastest land animal on the planet — it goes from zero to super-speedy in just three seconds!",
    thumb: "assets/episode-6-thumbnail.png", audio: "audio/ep06-cheetah.m4a" },

  { num: 7,  emoji: "🐺", title: "The Amazing Wolf",
    desc: "Howl along with the ultimate team player that hunts, plays, and protects its pack just like family!",
    thumb: "assets/episode-7-thumbnail.png", audio: "audio/ep07-wolf.m4a" },

  { num: 8,  emoji: "🦎", title: "The Amazing Lizard",
    desc: "Stick around for a scaly superstar that can climb walls, change colors, and even regrow its own tail!",
    thumb: "assets/episode-8-thumbnail.png", audio: "audio/ep08-lizard.m4a" },

  { num: 9,  emoji: "🐬", title: "The Amazing Dolphin",
    desc: "Dive into the ocean with one of the smartest animals in the sea — it chats using clicks and whistles!",
    thumb: "assets/episode-9-thumbnail.png", audio: "audio/ep09-dolphin.m4a" },

  { num: 10, emoji: "🦈", title: "The Amazing Shark",
    desc: "Sink your teeth into the ocean's coolest hunter — it has been swimming the seas since before the dinosaurs!",
    thumb: "assets/episode-10-thumbnail.png", audio: "audio/ep10-shark.m4a" },

  { num: 11, emoji: "🐙", title: "The Amazing Octopus",
    desc: "Squish into the deep with an eight-armed genius that has three hearts and bright blue blood!",
    thumb: "assets/episode-11-thumbnail.png", audio: "audio/ep11-octopus.m4a" },

  { num: 12, emoji: "🐧", title: "The Amazing Penguin",
    desc: "Waddle onto the ice with a bird that can't fly but swims like a torpedo and slides on its tummy for fun!",
    thumb: "assets/episode-12-thumbnail.png", audio: "audio/ep12-penguin.m4a" },

  { num: 13, emoji: "🦎", title: "The Amazing Axolotl",
    desc: "Meet the smiley underwater salamander that never grows up — and can regrow almost any body part!",
    thumb: "assets/episode-13-thumbnail.png", audio: "audio/ep13-axolotl.m4a" },

  { num: 14, emoji: "🦑", title: "The Amazing Giant Squid",
    desc: "Plunge into the deep, dark ocean to meet a giant with eyes as big as dinner plates and ten waving arms!",
    thumb: "assets/episode-14-thumbnail.png", audio: "audio/ep14-giant-squid.m4a" },

  { num: 15, emoji: "🐦", title: "The Amazing Hummingbird",
    desc: "Zoom in on the tiniest bird of all — its wings beat so fast they hum, and it can even fly backwards!",
    thumb: "assets/episode-15-thumbnail.png", audio: "audio/ep15-hummingbird.m4a" },

  { num: 16, emoji: "🐘", title: "The Amazing Elephant",
    desc: "Stomp across the savanna with the biggest land animal on Earth — it says hello with a trumpet and a giant trunk!",
    thumb: "assets/episode-16-thumbnail.png", audio: "audio/ep16-elephant.m4a" },

  { num: 17, emoji: "🦍", title: "The Amazing Gorilla",
    desc: "Swing into the jungle with a gentle giant that's super strong, super smart, and loves a good chest-drum!",
    thumb: "assets/episode-17-thumbnail.png", audio: "audio/ep17-gorilla.m4a" },

  { num: 18, emoji: "🐟", title: "The Amazing Manta Ray",
    desc: "Glide through the ocean with a graceful giant that flies underwater on wings as wide as a car!",
    thumb: "assets/episode-18-thumbnail.png", audio: "audio/ep18-manta-ray.m4a" },

  { num: 19, emoji: "🐆", title: "The Amazing Snow Leopard",
    desc: "Climb the snowy mountains with a secret, spotty cat so sneaky it's called the 'ghost of the mountains'!",
    thumb: "assets/episode-19-thumbnail.png", audio: "audio/ep19-snow-leopard.m4a" },

  { num: 20, emoji: "🦆", title: "The Amazing Platypus",
    desc: "Say hi to the weirdest animal ever — it has a duck's bill, a beaver's tail, and lays eggs like a bird!",
    thumb: "assets/episode-20-thumbnail.png", audio: "audio/ep20-platypus.m4a" },

  { num: 21, emoji: "🦎", title: "The Amazing Komodo Dragon",
    desc: "Watch your step near the biggest lizard on the planet — a real-life dragon with a super-sniffer tongue!",
    thumb: "assets/episode-21-thumbnail.png", audio: "audio/ep21-komodo-dragon.m4a" },

  { num: 22, emoji: "🦄", title: "The Amazing Narwhal",
    desc: "Dive into the icy Arctic to meet the 'unicorn of the sea' — a whale with a giant magical-looking tusk!",
    thumb: "assets/episode-22-thumbnail.png", audio: "audio/ep22-narwhal.m4a" },

  { num: 23, emoji: "🦐", title: "The Amazing Mantis Shrimp",
    desc: "Don't blink — this little ocean boxer throws the fastest punch in the animal kingdom and sees more colors than you!",
    thumb: "assets/episode-23-thumbnail.png", audio: "audio/ep23-mantis-shrimp.m4a" },

  { num: 24, emoji: "🦥", title: "The Amazing Sloth",
    desc: "Slow waaay down with the chillest animal in the rainforest — it does everything in slow motion, even upside down!",
    thumb: "assets/episode-24-thumbnail.png", audio: "audio/ep24-sloth.m4a" },

  { special: true, emoji: "🌟", title: "Famous Pets",
    desc: "A super-special episode all about the world's most FAMOUS pets — the cats and dogs that became real-life celebrities!",
    thumb: "assets/episode-special-thumbnail.png", audio: "audio/ep-special-famous-pets.m4a" },
];

/* ---------- Render the episode cards ---------- */
function renderEpisodes() {
  const grid = document.getElementById("ep-grid");
  if (!grid) return;

  grid.innerHTML = EPISODES.map((ep) => {
    const badge = ep.special ? "Special" : `Episode ${ep.num}`;
    const label = ep.special ? `Special: ${ep.title}` : `Episode ${ep.num}: ${ep.title}`;

    if (ep.comingSoon) {
      return `
      <article class="ep-card ep-card--soon">
        <div class="ep-thumb-wrap ep-thumb-wrap--soon">
          <div class="soon-art"><span class="soon-paw">🐾</span><span class="soon-text">Coming&nbsp;Soon!</span></div>
          <span class="ep-badge">${badge}</span>
        </div>
        <div class="ep-body">
          <h3 class="ep-title">${ep.emoji} ${ep.title}</h3>
          <p class="ep-desc">${ep.desc}</p>
        </div>
      </article>`;
    }

    // onerror: if the thumbnail isn't in place yet, swap to a friendly placeholder
    const onErr = "this.parentElement.classList.add('thumb-missing'); this.style.display='none';";
    return `
      <article class="ep-card${ep.special ? " ep-card--special" : ""}">
        <div class="ep-thumb-wrap">
          <img src="${ep.thumb}" alt="${label}" loading="lazy" width="600" height="400" onerror="${onErr}">
          ${ep.special ? "" : `<span class="ep-badge">${badge}</span>`}
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
