(() => {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Perfil ---------- */
  $("#name").textContent = PROFILE.name;
  $("#role").textContent = `> ${PROFILE.role}`;
  $("#tagline").textContent = PROFILE.tagline;
  $("#footerName").textContent = PROFILE.name;
  $("#year").textContent = new Date().getFullYear();
  document.title = `${PROFILE.name} · ${PROFILE.role}`;

  if (PROFILE.available) {
    $("#status").innerHTML = `<span class="dot"></span> Disponible para nuevos proyectos · ${esc(PROFILE.location)}`;
  } else {
    $("#status").textContent = PROFILE.location;
  }

  if (PROFILE.cv) {
    const cv = $("#cvBtn");
    cv.href = PROFILE.cv;
    cv.hidden = false;
  }

  $("#about").innerHTML = PROFILE.about.map((p) => `<p>${esc(p)}</p>`).join("");

  /* ---------- Habilidades ---------- */
  $("#skills").innerHTML = SKILLS.map(
    (g) => `
    <article class="card skill">
      <h3>${esc(g.group)}</h3>
      <ul class="chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </article>`
  ).join("");

  /* ---------- Iconos ---------- */
  const icon = {
    github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>',
  };

  const projectCard = (p) => `
      <article class="card project">
        <div class="project__head">
          <svg class="project__folder" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <div class="project__links">
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener" aria-label="Código de ${esc(p.title)}">${icon.github}</a>` : ""}
            ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="Demo de ${esc(p.title)}">${icon.ext}</a>` : ""}
          </div>
        </div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        ${p.tags ? `<ul class="tags mono">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${p.demo ? `<a class="project__demo" href="${esc(p.demo)}" target="_blank" rel="noopener">Ver demo →</a>` : ""}
      </article>`;

  /* ---------- Salesforce ---------- */
  $("#sfIntro").textContent = SALESFORCE.intro;
  $("#sfStats").innerHTML = SALESFORCE.stats
    .map((st) => `<div class="stat card"><strong class="stat__value">${esc(st.value)}</strong><span class="stat__label">${esc(st.label)}</span></div>`)
    .join("");
  $("#sfCerts").innerHTML = SALESFORCE.certifications
    .map(
      (c) => `
      <li class="card sf__cert">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 13.9 7 22l5-3 5 3-1.5-8.1"/></svg>
        <div>
          <h4>${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.name)}</a>` : esc(c.name)}</h4>
          <p class="muted">${esc(c.issuer)} · ${esc(c.date)}</p>
        </div>
      </li>`
    )
    .join("");
  if (SALESFORCE.project) $("#sfProject").innerHTML = projectCard(SALESFORCE.project);
  else $("#sfProjectWrap").hidden = true;
  if (SALESFORCE.profile) {
    $("#sfProfile").href = SALESFORCE.profile;
    $("#sfProfile").hidden = false;
  }

  /* ---------- Proyectos de GitHub + filtros ---------- */
  const PROJECTS = GITHUB.repos;
  const renderProjects = (filter) => {
    const list = filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));
    $("#projects").innerHTML = list.map(projectCard).join("");
  };
  $("#ghMore").href = GITHUB.url;
  $("#ghMore").innerHTML = `${icon.github} Ver todo en github.com/${esc(GITHUB.user)}`;

  const allTags = ["Todos", ...new Set(PROJECTS.flatMap((p) => p.tags))];
  const filters = $("#filters");
  filters.innerHTML = allTags
    .map((t, i) => `<button class="filter${i === 0 ? " is-active" : ""}" aria-pressed="${i === 0}" data-tag="${esc(t)}">${esc(t)}</button>`)
    .join("");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    filters.querySelectorAll(".filter").forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });
    renderProjects(btn.dataset.tag);
  });
  renderProjects("Todos");

  /* ---------- Experiencia / formación ---------- */
  const timeline = (items) =>
    items
      .map(
        (i) => `
      <li>
        <span class="timeline__period mono">${esc(i.period)}</span>
        <h4>${esc(i.title)} <span class="muted">· ${esc(i.org)}</span></h4>
        ${i.description ? `<p>${esc(i.description)}</p>` : ""}
      </li>`
      )
      .join("");
  $("#experience").innerHTML = timeline(EXPERIENCE);
  $("#education").innerHTML = timeline(EDUCATION);

  /* ---------- Contacto ---------- */
  const L = PROFILE.links;
  if (L.email) {
    $("#emailBtn").href = `mailto:${L.email}`;
    $("#emailBtn").hidden = false;
  }
  const socialLabels = { github: "GitHub", linkedin: "LinkedIn", trailhead: "Trailblazer", email: "Email" };
  $("#socials").innerHTML = Object.entries(L)
    .filter(([, v]) => v)
    .map(([k, v]) => {
      const href = k === "email" ? `mailto:${v}` : v;
      return `<li><a href="${esc(href)}" ${k === "email" ? "" : 'target="_blank" rel="noopener"'}>${socialLabels[k] || k}</a></li>`;
    })
    .join("");

  /* ---------- Tema ---------- */
  $("#themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Menú móvil ---------- */
  const menuBtn = $("#menuToggle");
  const navLinks = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Animación al hacer scroll ---------- */
  const reveal = document.querySelectorAll(".section");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveal.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("is-visible"), io.unobserve(en.target))),
      { threshold: 0.12 }
    );
    reveal.forEach((el) => io.observe(el));
  }
})();
