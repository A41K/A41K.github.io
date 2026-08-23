/* ==========================================================
     PROJECTS — edit this array to add / remove / reorder work.
     Each object renders as one card. That's the whole API.
  ========================================================== */
  const projects = [
    {
      title: "Godot Rhythm Game",
      year: "2026",
      description: "A rhythm game made for a Game Jam / YSWS. Spent over 30 hrs making it in Godot 4.0",
      tags: ["GDScript", "JSON", "HTML"],
      link: "https://a41k.org/Godot-Rhytm-Game/"
    },
    {
      title: "Another Rhythm Game",
      year: "2026",
      description: "A Rhythm game made specifically for the Remixed YSWS by HackClub. Also made in Godot 4.0",
      tags: ["GDScript", "JSON", "HTML"],
      link: "https://a41k.org/Another-Rhythm-Game/"
    },
    {
      title: "One Direction",
      year: "2026",
      description: "A gravity changing platformer made for a Game Jam. Came in 16th place overall. Also made in Godot 4.0",
      tags: ["GDScript", "JSON", "HTML"],
      link: "https://a41k.org/One-Direction/"
    },
  /*  {
      title: "Project Four",
      year: "2024",
      description: "Swap the title, year, description, tags, and link — nothing else to touch.",
      tags: ["Swift", "iOS"],
      link: "#"
   */
  ];

  /* ==========================================================
     SOCIALS — edit this array to add / remove buttons.
     "icon" is a Simple Icons slug — see https://simpleicons.org
     to confirm or swap any of these.
  ========================================================== */
  const socials = [
    { label: "GitHub",   url: "https://github.com/A41K",         icon: "github" },
    { label: "Twitter",  url: "https://x.com/A41Kof",              icon: "x" },
    { label: "Discord",  url: "https://discord.com/users/A41K",    icon: "discord" },
    { label: "itch.io",  url: "https://A41K.itch.io",            icon: "itchdotio" },
    { label: "Email",    url: "mailto:a41koutside@gmail.com",        icon: "gmail" },
    { label: "Last.fm",    url: "https://last.fm/user/A41K",            icon: "lastdotfm" },
  ];

  /* ==========================================================
     NOW PLAYING — pulls live data from your own serverless
     endpoint (see /api/now-playing.js). That endpoint holds your
     Spotify secrets and refreshes the access token server-side —
     a static page can't safely do that part on its own.

     Set this to your deployed function's URL, e.g.
     "https://your-project.vercel.app/api/now-playing".
  ========================================================== */
  const NOW_PLAYING_ENDPOINT = "https://your-project.vercel.app/api/now-playing";

  // Shown if the endpoint hasn't been set up yet, or a request fails.
  const fallbackNowPlaying = {
    isPlaying: false,
    track: "Not connected yet",
    artist: "Spotify integration coming soon",
    albumArt: "",
    url: "#"
  };

  function renderProjects(){
    const el = document.getElementById('projects');
    document.getElementById('project-count').textContent =
      projects.length + (projects.length === 1 ? ' project' : ' projects');

    el.innerHTML = projects.map(p => `
      <article class="project-card">
        <div class="project-top">
          <span class="project-title">${p.title}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project</a>
      </article>
    `).join('');
  }

  function renderSocials(){
    const el = document.getElementById('socials');
    el.innerHTML = socials.map(s => `
      <a class="social-btn" href="${s.url}" target="_blank" rel="noopener">
        <img src="https://cdn.simpleicons.org/${s.icon}/ffffff" alt="" loading="lazy">
        ${s.label}
      </a>
    `).join('');
  }

  function renderNowPlaying(data){
    document.getElementById('np-status-text').textContent =
      data.isPlaying ? 'Now playing' : 'Last played';
    document.getElementById('np-eq').style.display =
      data.isPlaying ? 'inline-flex' : 'none';
    document.getElementById('np-track').textContent = data.track;
    document.getElementById('np-artist').textContent = data.artist;
    document.getElementById('np-link').href = data.url;
    document.getElementById('np-art').style.backgroundImage =
      data.albumArt ? `url(${data.albumArt})` : 'none';
  }

  async function loadNowPlaying(){
    try{
      const res = await fetch(NOW_PLAYING_ENDPOINT);
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      if (!data.track) throw new Error('Nothing to show');
      renderNowPlaying(data);
    } catch (err){
      renderNowPlaying(fallbackNowPlaying);
    }
  }

  renderProjects();
  renderSocials();
  loadNowPlaying();
  document.getElementById('year').textContent = new Date().getFullYear();