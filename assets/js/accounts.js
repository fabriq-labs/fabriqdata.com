const YOUTUBE_EMBED = "https://www.youtube.com/embed/2zdpp7nfMwo?rel=0";

const MEDIA = {
  extract: {
    embed: YOUTUBE_EMBED,
    title: "Document capture",
    stills: []
  },
  reporting: {
    embed: YOUTUBE_EMBED,
    title: "Group reporting",
    stills: []
  },
  extend: {
    embed: YOUTUBE_EMBED,
    title: "Custom agents and integrations",
    stills: []
  }
};

function probe(url) {
  return fetch(url, { method: "HEAD" }).then((r) => r.ok).catch(() => false);
}

async function mountWell(el) {
  const spec = MEDIA[el.dataset.media];
  if (!spec) return;

  const videoHost = el.querySelector("[data-video]");
  const stillsHost = el.querySelector("[data-stills]");

  if (spec.embed && videoHost) {
    const iframe = document.createElement("iframe");
    iframe.src = spec.embed;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.title = spec.title;
    const wrap = document.createElement("div");
    wrap.className = "player";
    wrap.append(iframe);
    videoHost.append(wrap);
  }

  if (!stillsHost || !spec.stills.length) return;
  const frames = [];
  for (const still of spec.stills) {
    if (await probe(still.src)) frames.push(still);
  }
  if (!frames.length) return;
  const grid = document.createElement("div");
  grid.className = "stills";
  for (const still of frames) grid.append(stillCard(still));
  stillsHost.append(grid);
}

function stillCard(still) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "still-btn";
  btn.setAttribute("aria-label", `Enlarge: ${still.cap}`);
  btn.innerHTML = `<img src="${still.src}" alt="${still.cap}" /><figcaption>${still.cap}</figcaption>`;
  btn.addEventListener("click", () => openLightbox(still.src, still.cap));
  return btn;
}

function openLightbox(src, cap) {
  const dialog = document.getElementById("lightbox");
  dialog.querySelector("img").src = src;
  dialog.querySelector("img").alt = cap;
  dialog.showModal();
}

function scrollSpy() {
  const links = [...document.querySelectorAll(".toc a")];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const setActive = () => {
    const rail = document.querySelector(".rail");
    const offset = rail ? rail.getBoundingClientRect().bottom + 8 : 96;
    let current = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= offset) current = s;
    }
    for (const a of links) {
      a.classList.toggle("is-active", a.getAttribute("href") === `#${current.id}`);
    }
  };

  document.addEventListener("scroll", setActive, { passive: true });
  setActive();
}

function connectorFilter() {
  const chips = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".conn")];
  for (const chip of chips) {
    chip.addEventListener("click", () => {
      const val = chip.dataset.filter;
      for (const c of chips) c.classList.toggle("is-on", c === chip);
      for (const card of cards) {
        card.hidden = val !== "all" && card.dataset.status !== val;
      }
    });
  }
}

function roleTabs() {
  const tabs = [...document.querySelectorAll("[data-role]")];
  const panels = [...document.querySelectorAll("[data-role-panel]")];
  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      const id = tab.dataset.role;
      for (const t of tabs) {
        t.classList.toggle("is-on", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      }
      for (const p of panels) p.hidden = p.dataset.rolePanel !== id;
    });
  }
}

function diagramJumps() {
  for (const btn of document.querySelectorAll("[data-jump]")) {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.jump);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (const well of document.querySelectorAll("[data-media]")) mountWell(well);
  scrollSpy();
  connectorFilter();
  roleTabs();
  diagramJumps();

  const dialog = document.getElementById("lightbox");
  dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog || e.target.classList.contains("lightbox-inner")) dialog.close();
  });
});
