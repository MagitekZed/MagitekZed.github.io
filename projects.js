/* ============================================================================
 *  projects.js: the only file you edit to manage the portfolio.
 * ----------------------------------------------------------------------------
 *  Each project is one { ... } block in `projects`. Order doesn't matter: the
 *  featured grid keeps the order below, and the log sorts by `updated`.
 *
 *  Fields:
 *    title     (required)  Display name.
 *    repo      (required)  GitHub repo name under `owner`.
 *    summary   (required)  One or two plain sentences.
 *    category  (required)  One of the keys in `categories`.
 *    updated   (required)  "YYYY-MM-DD", the last meaningful update.
 *    status    (optional)  "live" (default), "cli", "desktop", "dev" or "code".
 *                            live     has a site at https://<domain>/<repo>/
 *                            cli      command-line tool with a download page
 *                            desktop  desktop app, no web version
 *                            dev      in development, not deployed yet
 *                            code     source only, no live site
 *    featured  (optional)  true to show it as a large card with a screenshot.
 *    image     (optional)  Screenshot path for featured cards (img/<repo>.webp).
 *    tags      (optional)  Short strings shown as #tags.
 *    private   (optional)  true if the repo is private. Hides the source link.
 *    site      (optional)  Live URL, if it isn't https://<domain>/<repo>/.
 * ========================================================================== */

window.PORTFOLIO = {
  owner: "MagitekZed",
  domain: "zedtlabs.dev",
  name: "Zach Dando",
  lab: "ZeD-T Labs",
  email: "hello@zedtlabs.dev",
  linkedin: "https://www.linkedin.com/in/zachary-dando-thompson/",
  since: "2023",

  categories: {
    games: "games",
    tabletop: "tabletop",
    gametools: "game tools",
    viz: "visualization",
    tools: "tools",
  },

  projects: [
    /* ---------------------------------------------------------- featured */
    {
      title: "Atlas of Ages",
      repo: "atlas-of-ages",
      featured: true,
      image: "img/atlas-of-ages.webp",
      category: "viz",
      updated: "2026-10-27",
      tags: ["simulation", "procedural", "canvas"],
      summary: "A world simulator that runs by itself. Set the conditions of a new planet and history unfolds a day at a time: plate tectonics and climate, forests and herds, tribes that grow into empires, trade, faiths, wars and plagues. Every town, ruler and war gets its own record, and there are god tools if you want to interfere.",
    },
    {
      title: "StarWiki",
      repo: "Star-Wiki",
      featured: true,
      image: "img/Star-Wiki.webp",
      category: "viz",
      updated: "2026-05-29",
      tags: ["three.js", "wikipedia api", "3d"],
      summary: "Wikipedia as a 3D starfield. Every article is a star, and its most related links orbit it as rays you can fly along. Zoom out to see your whole trail drawn as a constellation, or ask for the shortest link path between any two articles and watch the camera fly the route.",
    },
    {
      title: "Lag Lens",
      repo: "lag-lens",
      featured: true,
      image: "img/lag-lens.webp",
      category: "tools",
      status: "cli",
      updated: "2026-10-23",
      tags: ["python", "networking", "diagnostics"],
      summary: "Built to answer one question about Xbox rubber-banding: is it the home network, the cable modem, Comcast, or the internet? It runs on a computer plugged into the same router, probes every hop several times a second, detects lag episodes on its own, and writes a plain-English report you can show your ISP.",
    },
    {
      title: "MCU Multiverse Timeline",
      repo: "mcu-timeline",
      featured: true,
      private: true,
      image: "img/mcu-timeline.webp",
      category: "viz",
      updated: "2026-08-10",
      tags: ["react", "typescript", "dataset"],
      summary: "Follow any Marvel Cinematic Universe character through every appearance, in story order or release order. Overlay characters to see where their paths cross, with canon status and which universe each project belongs to. Uncertain placements are flagged instead of hidden.",
    },
    {
      title: "Primary Defense",
      repo: "primary-defense",
      featured: true,
      private: true,
      image: "img/primary-defense.webp",
      category: "games",
      updated: "2026-10-14",
      tags: ["tower defense", "canvas", "balance bot"],
      summary: "A tower defense game about mixing paint. Every enemy is mixed from red, yellow and blue, each color has its own health, and a tower only drains the colors it shares with its target. Three maps, three difficulties, and a bot that plays every wave to keep the balance honest.",
    },
    {
      title: "Encyclopedia Magica",
      repo: "Encyclopedia-Magica",
      featured: true,
      image: "img/Encyclopedia-Magica.webp",
      category: "tabletop",
      updated: "2026-07-02",
      tags: ["ad&d 2e", "dice roller", "dataset"],
      summary: "A roller for the AD&D 2nd edition Encyclopedia Magica, with all 5,709 magic items and artifacts digitized into one checked dataset. Every roll comes with a trace tree that shows exactly which tables and dice produced it.",
    },
    {
      title: "YouTube Roulette",
      repo: "ytroulette",
      featured: true,
      image: "img/ytroulette.webp",
      category: "games",
      updated: "2026-09-16",
      tags: ["party game", "multiplayer", "supabase"],
      summary: "A party game for one TV and a room full of phones. Each round searches YouTube with a random four-character term, players pick the strangest video from what comes back, and everyone votes on the winner.",
    },
    {
      title: "Embervale Blueprints",
      repo: "embervale-blueprints",
      featured: true,
      image: "img/embervale-blueprints.webp",
      category: "gametools",
      updated: "2026-10-27",
      tags: ["enshrouded", "3d", "planner"],
      summary: "Fan-made planning tools for Enshrouded 1.0: a block-by-block base planner you can walk through in 3D, and a build tester for the full 243-node skill tree. Everything saves in your browser.",
    },

    /* --------------------------------------------------------------- log */
    {
      title: "My Library",
      repo: "my-library",
      private: true,
      category: "tools",
      updated: "2026-08-26",
      tags: ["books", "goodreads"],
      summary: "A reading database built from a Goodreads export, with stats, series tracking, cover art and per-universe timelines.",
    },
    {
      title: "Palpedia",
      repo: "palworld-helper",
      category: "gametools",
      updated: "2026-08-11",
      tags: ["palworld"],
      summary: "Palworld 1.0 companion that tracks your paldex across all 299 pals and suggests self-sufficient base crews.",
    },
    {
      title: "Cribbage",
      repo: "Cribbage",
      category: "games",
      updated: "2026-08-03",
      tags: ["card game", "svg"],
      summary: "Cribbage against the computer, with full standard scoring and three difficulty levels. The test suite checks all 2,598,960 possible hands.",
    },
    {
      title: "BB3 League Tracker",
      repo: "BB3-Tracker",
      category: "tabletop",
      updated: "2026-10-08",
      tags: ["blood bowl"],
      summary: "Runs in-person Blood Bowl leagues: standings, teams, treasury, schedules, live match tracking and a rules glossary.",
    },
    {
      title: "D&D Toolkit",
      repo: "DnD-Toolkit",
      private: true,
      category: "tabletop",
      updated: "2026-06-15",
      tags: ["d&d 5e", "supabase"],
      summary: "A real-time, two-screen toolkit for D&D 5e. The DM runs combat and initiative and pushes maps and audio to a display the players can see.",
    },
    {
      title: "D&D Nexus",
      repo: "dnd-nexus",
      status: "code",
      category: "tabletop",
      updated: "2026-10-08",
      tags: ["d&d 5e", "vanilla js"],
      summary: "The earlier version of the D&D toolkit: a DM controller plus an in-room player display, built in plain JavaScript on Supabase.",
    },
    {
      title: "PDF Splitter",
      repo: "PDF-Splitter",
      category: "tools",
      updated: "2026-07-01",
      tags: ["pdf", "ai"],
      summary: "Splits big PDFs, like RPG sourcebooks, into chunks sized for an AI model. Runs entirely in the browser, so files never leave your computer.",
    },
    {
      title: "Maze Walker",
      repo: "Maze-Walker",
      private: true,
      category: "games",
      updated: "2026-06-19",
      tags: ["roguelike", "three.js"],
      summary: "An isometric roguelike where your torchlight is your vision, your clock and your health, across 12 seeded mazes.",
    },
    {
      title: "Steam Backlog Roulette",
      repo: "steam-roulette",
      private: true,
      category: "gametools",
      updated: "2026-08-18",
      tags: ["steam"],
      summary: "Picks a random game from your Steam backlog, with filters for playtime, age, tags and reviews, and keeps track of how each pick went.",
    },
    {
      title: "Algorithm Resetter",
      repo: "algorithm-resetter",
      category: "tools",
      updated: "2026-07-05",
      tags: ["youtube"],
      summary: "Seeds your YouTube watch history with curated random videos from topics you choose, to pull your recommendations out of a rut.",
    },
    {
      title: "Game Scorecards",
      repo: "Scorecards",
      private: true,
      category: "tabletop",
      updated: "2026-07-23",
      tags: ["scorekeeper", "mobile"],
      summary: "Phone-first scorekeeping for game night, with themed scorecards for Quiddler, Wizard, Ticket to Ride, Magic: The Gathering and Play Nine.",
    },
    {
      title: "Chain Games",
      repo: "chain-games",
      private: true,
      category: "games",
      updated: "2026-07-12",
      tags: ["disc golf", "scorekeeper"],
      summary: "Disc golf scoring with alternative game modes for friendly rounds.",
    },
    {
      title: "Anime Tracker",
      repo: "Anime-Tracker",
      private: true,
      category: "tools",
      updated: "2026-10-21",
      tags: ["watchlist"],
      summary: "A personal anime watch log and watchlist with ratings, filters and a taste profile.",
    },
    {
      title: "Country Outliner",
      repo: "Country-Outliner",
      private: true,
      category: "viz",
      updated: "2025-11-02",
      tags: ["webgl", "maps"],
      summary: "Pick any country and watch its border draw itself in animated WebGL, with neon, blueprint and wireframe themes.",
    },
    {
      title: "NMS Refiner",
      repo: "NMS-Refiner",
      private: true,
      category: "gametools",
      updated: "2025-09-14",
      tags: ["no man's sky"],
      summary: "No Man's Sky refiner recipe lookup, with a crafting ladder and a reverse search from product to inputs.",
    },
    {
      title: "NMS Economist",
      repo: "NMS-Economist",
      private: true,
      category: "gametools",
      updated: "2025-09-12",
      tags: ["no man's sky"],
      summary: "Logs No Man's Sky systems, economies and prices, then builds trade routes from them.",
    },
    {
      title: "Dark Filaments",
      repo: "Dark-Filaments",
      status: "dev",
      category: "games",
      updated: "2026-10-08",
      tags: ["idle game", "react", "three.js"],
      summary: "An idle game about entropy and loss that grows from one solar system out to the cosmic web, played in short check-ins over weeks. In development and not deployed yet.",
    },
    {
      title: "Prism",
      repo: "prism-player",
      private: true,
      status: "desktop",
      category: "tools",
      updated: "2026-08-02",
      tags: ["electron", "audio", "three.js"],
      summary: "A desktop music player with a laser-show visualizer that sweeps and flashes with the beat, driven by real-time audio analysis.",
    },
  ],
};
