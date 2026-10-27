/* Renders the portfolio from window.PORTFOLIO (projects.js). No build step. */
(function () {
  "use strict";

  var CFG = window.PORTFOLIO || { projects: [], categories: {} };
  var PROJECTS = CFG.projects || [];
  var CATS = CFG.categories || {};

  var ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  };

  var STATUS = {
    live: "live",
    cli: "cli tool",
    desktop: "desktop app",
    dev: "in development",
    code: "source only",
  };

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function status(p) { return p.status || "live"; }
  function hasSite(p) { var s = status(p); return s === "live" || s === "cli"; }
  function siteUrl(p) { return p.site || "https://" + CFG.domain + "/" + p.repo + "/"; }
  function repoUrl(p) { return "https://github.com/" + CFG.owner + "/" + p.repo; }
  function fmtDate(d) {
    var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var parts = String(d).split("-");
    return m[parseInt(parts[1], 10) - 1] + " " + parts[0];
  }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function linksHtml(p) {
    var out = [];
    if (hasSite(p)) {
      out.push('<a class="go" href="' + esc(siteUrl(p)) + '">' + (status(p) === "cli" ? "download ↗" : "open ↗") + "</a>");
    }
    if (p.private) out.push("<span>source private</span>");
    else out.push('<a href="' + esc(repoUrl(p)) + '">source</a>');
    return out.join("");
  }
  function badgeHtml(p) {
    var s = status(p);
    return '<span class="badge ' + s + '">' + esc(STATUS[s] || s) + "</span>";
  }

  /* ---------- hero ---------- */
  function renderContact() {
    var html = '<a class="btn primary" href="mailto:' + esc(CFG.email) + '">' + ICON.mail + esc(CFG.email) + "</a>";
    html += '<a class="btn" href="https://github.com/' + esc(CFG.owner) + '">' + ICON.github + "GitHub</a>";
    if (CFG.linkedin) html += '<a class="btn" href="' + esc(CFG.linkedin) + '">' + ICON.linkedin + "LinkedIn</a>";
    $("contact").innerHTML = html;
  }

  function renderStats() {
    var live = PROJECTS.filter(function (p) { return status(p) === "live"; }).length;
    var open = PROJECTS.filter(function (p) { return !p.private; }).length;
    var stats = [
      [PROJECTS.length, "projects"],
      [live, "live in the browser"],
      [open, "open source"],
      [CFG.since, "building since"],
    ];
    $("stats").innerHTML = stats.map(function (s) {
      return '<div class="stat"><div class="n">' + esc(s[0]) + '</div><div class="l">' + esc(s[1]) + "</div></div>";
    }).join("");
  }

  /* ---------- featured ---------- */
  function renderFeatured() {
    var list = PROJECTS.filter(function (p) { return p.featured; });
    $("featured-grid").innerHTML = list.map(function (p, i) {
      var id = "EXP-" + String(i + 1).padStart(2, "0");
      var shot = p.image
        ? (hasSite(p) ? '<a class="shot" href="' + esc(siteUrl(p)) + '" tabindex="-1" aria-hidden="true">' : '<div class="shot">') +
          '<img src="' + esc(p.image) + '" alt="" loading="lazy" width="1200" height="750" />' +
          (hasSite(p) ? "</a>" : "</div>")
        : "";
      return (
        '<article class="card">' +
          '<div class="chrome"><span class="id">' + id + '</span><span class="path">~/' + esc(p.repo) + "/</span>" +
            '<span class="st">' + badgeHtml(p) + "</span></div>" +
          shot +
          '<div class="body">' +
            "<h3>" + esc(p.title) + "</h3>" +
            "<p>" + esc(p.summary) + "</p>" +
            '<div class="tags">' + (p.tags || []).map(function (t) { return "<span>#" + esc(t) + "</span>"; }).join("") + "</div>" +
            '<div class="links">' + linksHtml(p) + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- log ---------- */
  var state = { cat: load("zl-cat") || "all", q: "" };

  function renderFilters() {
    var counts = {};
    PROJECTS.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });
    var keys = ["all"].concat(Object.keys(CATS).filter(function (k) { return counts[k]; }));
    if (keys.indexOf(state.cat) === -1) state.cat = "all";
    $("filters").innerHTML = keys.map(function (k) {
      var label = k === "all" ? "all" : CATS[k];
      var n = k === "all" ? PROJECTS.length : counts[k];
      return '<button type="button" data-cat="' + esc(k) + '" aria-pressed="' + (state.cat === k) + '">' + esc(label) + " " + n + "</button>";
    }).join("");
  }

  function matches(p) {
    if (state.cat !== "all" && p.category !== state.cat) return false;
    if (!state.q) return true;
    var hay = [p.title, p.repo, p.summary, CATS[p.category]].concat(p.tags || []).join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function renderLog() {
    var list = PROJECTS.filter(matches).sort(function (a, b) {
      return a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : a.title.localeCompare(b.title);
    });
    if (!list.length) {
      $("log-list").innerHTML = '<div class="empty">grep: no matches</div>';
      return;
    }
    $("log-list").innerHTML = list.map(function (p) {
      return (
        '<div class="row">' +
          '<div class="date">' + esc(fmtDate(p.updated)) + "</div>" +
          '<div class="what">' +
            '<div class="name"><strong>' + esc(p.title) + "</strong>" +
              (p.featured ? '<span class="star">★ featured</span>' : "") +
              '<span class="cat">' + esc(CATS[p.category] || p.category) + "</span>" +
              (status(p) !== "live" ? badgeHtml(p) : "") +
            "</div>" +
            "<p>" + esc(p.summary) + "</p>" +
          "</div>" +
          '<div class="links">' + linksHtml(p) + "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------- theme ---------- */
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintThemeButton() {
    $("theme-btn").textContent = currentTheme() === "dark" ? "[light]" : "[dark]";
  }

  function init() {
    renderContact();
    renderStats();
    renderFeatured();
    renderFilters();
    renderLog();
    paintThemeButton();
    $("year").textContent = new Date().getFullYear();

    $("filters").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-cat]");
      if (!b) return;
      state.cat = b.getAttribute("data-cat");
      save("zl-cat", state.cat);
      renderFilters();
      renderLog();
    });
    $("q").addEventListener("input", function (e) {
      state.q = e.target.value.trim().toLowerCase();
      renderLog();
    });
    $("theme-btn").addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      save("zl-theme", next);
      paintThemeButton();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
