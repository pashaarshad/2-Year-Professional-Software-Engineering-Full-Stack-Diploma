import { SemesterData, ProgramOverview } from '../types/curriculum';

export const PROGRAM_INFO: ProgramOverview = {
  courseName: "2-Year Professional Software Engineering & Full-Stack Diploma",
  credential: "Diploma in Software Development & Cloud Systems",
  duration: "2 Years (4 Semesters / 24 Months)",
  totalSemesters: 4,
  totalWeeks: 96,
  totalHours: 1200,
  targetRole: [
    "Full-Stack Software Engineer",
    "Frontend Specialist (React/Next.js)",
    "Backend & API Engineer (Node.js/PostgreSQL)",
    "Cross-Platform Mobile Developer (Flutter/Android)",
    "Cloud & DevOps Associate"
  ],
  prerequisites: "Basic computer literacy and logical problem-solving aptitude. No prior coding experience required.",
  pedagogy: [
    "Project-Driven Hands-On Coding (70% Practical / 30% Theory)",
    "Daily Git Commits & Industry Code Reviews",
    "Real-World Developer Tooling (DevTools, Docker, Postman, CI/CD)",
    "Weekly Milestone Submissions & 1-on-1 Mentorship",
    "Production-Grade Capstone Deployments"
  ]
};

export const SEMESTERS_DATA: SemesterData[] = [
  {
    id: "sem-1",
    number: 1,
    roman: "I",
    title: "Foundations of Computing & Modern Web Development",
    subtitle: "From Zero to Building Responsive Interactive Web Experiences",
    duration: "Months 1–6 • Weeks 1–24 • ~300 Practical Hours",
    level: "Beginner Foundations",
    themeColor: "emerald",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    borderColor: "border-emerald-500",
    accentColor: "#059669",
    overview: "Establishes rock-solid computing fundamentals, modern web standards, developer workflow mastery (DevTools, Git, Terminal), and core algorithmic programming using JavaScript.",
    primaryGoal: "Students build, inspect, debug, and publish fully responsive, accessible, and interactive web applications using semantic HTML5, modern CSS3, vanilla JavaScript, and Git/GitHub.",
    technologies: [
      { category: "Web Core", items: ["HTML5", "CSS3", "JavaScript (ES6)", "DOM API", "Web Storage"] },
      { category: "Developer Tools", items: ["Chrome DevTools", "Inspect Element", "Lighthouse", "VS Code", "Terminal/CLI"] },
      { category: "Version Control", items: ["Git", "GitHub", "GitLab", "Markdown", "Git Flow"] },
      { category: "Design & UX", items: ["Responsive Design", "Flexbox", "CSS Grid", "Figma to HTML", "Accessibility (a11y)"] }
    ],
    modules: [
      {
        id: "m1-1",
        code: "CS101",
        title: "Computing Architecture, Internet Protocols & Developer Environment",
        duration: "Weeks 1–3 (36 Hours)",
        summary: "Understand how computers, operating systems, networks, browsers, and the Internet function under the hood.",
        topics: [
          {
            title: "How the Internet Works & Client-Server Architecture",
            description: "Understanding IP addresses, DNS resolution, TCP/IP packets, HTTP/HTTPS request-response cycles, and Web Server mechanics.",
            keyConcepts: ["DNS resolution pipeline", "HTTP status codes & headers", "Client-Server model", "URL anatomy & ports"],
            handsOnLab: "Network tracing using Wireshark & traceroute; configuring local localhost web servers.",
            recommendedTools: ["Terminal", "cURL", "DNS lookup tools", "Brave/Chrome"]
          },
          {
            title: "Developer Terminal & Unix Command-Line Mastery",
            description: "Navigating file systems, process management, file permissions, shell scripting basics, and environment variables.",
            keyConcepts: ["Bash/Zsh navigation", "Piping & redirection", "File manipulation (grep, sed, awk)", "SSH basics"],
            handsOnLab: "Building a shell script to automate directory backups and project scaffolding.",
            recommendedTools: ["Bash", "Zsh", "VS Code Integrated Terminal"]
          },
          {
            title: "VS Code & Development Ecosystem Configuration",
            description: "Mastering code editor ergonomics, essential extensions, linters (Prettier, ESLint), keyboard shortcuts, and workspace settings.",
            keyConcepts: ["Workspace configuration", "Prettier & format on save", "Snippet generation", "Emmet shortcuts"],
            handsOnLab: "Customizing a professional VS Code environment optimized for frontend web workflows.",
            recommendedTools: ["VS Code", "Live Server", "GitLens", "ESLint", "Prettier"]
          }
        ],
        outcomes: [
          "Explain the end-to-end lifecycle of a web request from browser to server and back.",
          "Confidently operate the command-line interface for common engineering tasks.",
          "Set up and maintain a professional local development environment."
        ]
      },
      {
        id: "m1-2",
        code: "WEB102",
        title: "Semantic HTML5, Web Accessibility & Modern CSS3 Layouts",
        duration: "Weeks 4–8 (60 Hours)",
        summary: "Crafting structured, accessible, and responsive layouts using modern CSS Flexbox, Grid, custom properties, and responsive typography.",
        topics: [
          {
            title: "Semantic HTML5, SEO Foundations & WCAG Accessibility",
            description: "Constructing meaningful document outlines, SEO metadata, Open Graph tags, ARIA attributes, and accessible forms.",
            keyConcepts: ["Semantic tags (<header>, <main>, <article>, <aside>)", "Form inputs & native validation", "ARIA roles & keyboard navigation", "Core Web Vitals"],
            handsOnLab: "Refactoring an unsemantic website to achieve 100/100 on Lighthouse SEO and Accessibility audits.",
            recommendedTools: ["Lighthouse", "W3C Validator", "axe DevTools"]
          },
          {
            title: "Modern CSS3: Box Model, Flexbox & 2D CSS Grid",
            description: "Deep dive into CSS specificity, cascading rules, multi-dimensional grid systems, flexible box layouts, and CSS custom properties (variables).",
            keyConcepts: ["CSS Box Model & box-sizing", "Flexbox axis alignment & wrapping", "CSS Grid template areas & fr units", "CSS Variables for dynamic theming"],
            handsOnLab: "Building a responsive 12-column editorial magazine layout without external frameworks.",
            recommendedTools: ["CSS Grid Generator", "Flexbox Froggy", "Polypane"]
          },
          {
            title: "Responsive Web Design, Media Queries & Micro-Animations",
            description: "Mobile-first philosophy, fluid typography with clamp(), breakpoint architecture, keyframe animations, and CSS transforms.",
            keyConcepts: ["Mobile-first media queries", "Fluid units (vw, vh, rem, ch, clamp)", "Transitions & @keyframes", "GPU-accelerated transforms"],
            handsOnLab: "Creating a fully adaptive, animated agency landing page translating directly from a Figma design spec.",
            recommendedTools: ["Figma", "Chrome Device Emulation", "CSS Triggers"]
          }
        ],
        outcomes: [
          "Structure complex documents with pristine semantic hierarchy and accessibility compliance.",
          "Build pixel-perfect responsive layouts adapted to mobile, tablet, desktop, and ultra-wide screens.",
          "Implement engaging CSS micro-interactions with smooth 60fps animations."
        ]
      },
      {
        id: "m1-3",
        code: "DEV103",
        title: "Developer Superpowers: Chrome DevTools, Inspect & Chrome Extensions",
        duration: "Weeks 9–11 (36 Hours)",
        summary: "Mastering browser inspection, CSS live editing, DOM breakpoints, network traffic analysis, memory profiling, and building custom Chrome Extensions.",
        topics: [
          {
            title: "Mastering the Elements & Inspect Tab",
            description: "Live DOM tree modification, box-model debugging, computed styles inspection, pseudo-state forced triggers (:hover, :active), and grid/flex overlays.",
            keyConcepts: ["Live DOM inspection", "Computed properties cascade", "Forcing element states", "Flex/Grid visual debugging badges"],
            handsOnLab: "Reverse engineering the layout and design tokens of a live top-tier SaaS website using Inspect.",
            recommendedTools: ["Chrome DevTools", "Firefox Developer Edition"]
          },
          {
            title: "Console, Network Tab, Sources & Client Storage Debugging",
            description: "Console API methods (console.table, console.time), network waterfall analysis, payload inspection, conditional breakpoints, and localStorage/cookie inspection.",
            keyConcepts: ["Network waterfall & throttling (3G simulation)", "XHR/Fetch filter", "Sources tab & step-over breakpoints", "Application tab: LocalStorage, SessionStorage, IndexedDB"],
            handsOnLab: "Diagnosing and fixing 5 intentional performance bugs, broken API payloads, and memory leaks in a demo app.",
            recommendedTools: ["DevTools Network Throttling", "DevTools Memory Profiler"]
          },
          {
            title: "Building & Publishing Custom Chrome Extensions",
            description: "Understanding Manifest V3, background service workers, content scripts, popup UI, permissions, and Chrome Storage API.",
            keyConcepts: ["Manifest.json V3 structure", "Content Scripts DOM injection", "Popup action UI", "Chrome runtime messaging"],
            handsOnLab: "Developing a 'Developer Quick-Inspector & Color Palette Saver' Chrome extension from scratch and running it in Developer Mode.",
            recommendedTools: ["Chrome Extension Manager", "WebExtension APIs"]
          }
        ],
        outcomes: [
          "Rapidly pinpoint layout glitches and network bottlenecks using browser DevTools.",
          "Debug complex JavaScript runtime errors using step-through breakpoints.",
          "Architect, package, and test production Chrome extensions using Manifest V3."
        ]
      },
      {
        id: "m1-4",
        code: "JS104",
        title: "JavaScript Core: Algorithms, DOM Manipulation & Event Systems",
        duration: "Weeks 12–18 (72 Hours)",
        summary: "Learn imperative and functional programming, data structures, control flow, DOM manipulation, custom event handling, and client-side state.",
        topics: [
          {
            title: "JavaScript Fundamentals & Core Language Mechanics",
            description: "Variables (let, const, var), primitive vs reference types, type coercion, operators, control flow (if-else, switch, loops), and pure functions.",
            keyConcepts: ["Data types & memory stack vs heap", "Arrow functions & default params", "Scope chain & lexical scope", "Closures & IIFE"],
            handsOnLab: "Writing a suite of 20 algorithmic utility functions (sorting, deduplication, deep clone, string transforms).",
            recommendedTools: ["Node.js REPL", "Quokka.js", "JSFiddle"]
          },
          {
            title: "Arrays, Objects & Functional Array Methods",
            description: "Object manipulation, destructuring, spread/rest operators, and functional pipelines using map(), filter(), reduce(), find(), and some().",
            keyConcepts: ["Immutability principles", "Object.keys/values/entries", "Array transformation pipelines", "Chaining array methods"],
            handsOnLab: "Building an in-memory data processing engine for a financial transaction dataset.",
            recommendedTools: ["VS Code Debugger", "TypeScript Playgrounds"]
          },
          {
            title: "DOM Traversal, Manipulation & Custom Event Handling",
            description: "Selecting elements (querySelector, closest), creating dynamic nodes, event delegation, bubbling/capturing, keyboard navigation, and form lifecycle.",
            keyConcepts: ["DOM tree traversal", "Event bubbling & event delegation", "preventDefault & stopPropagation", "FormData API & validation"],
            handsOnLab: "Creating an interactive Kanban board with drag-and-drop, inline editing, and validation without external libraries.",
            recommendedTools: ["Browser DOM APIs", "Event Listeners Inspector"]
          },
          {
            title: "Browser Storage & Asynchronous Foundations",
            description: "Persisting data with localStorage & sessionStorage, JSON parsing/stringifying, setInterval/setTimeout, and introduction to Promises.",
            keyConcepts: ["JSON serialization", "Storage event synchronization", "Microtask vs Macrotask queue", "Basic Promise creation & handling"],
            handsOnLab: "Building an offline-capable Personal Habit & Task Tracker with persistent local analytics.",
            recommendedTools: ["DevTools Storage Tab", "JSONLint"]
          }
        ],
        outcomes: [
          "Write clean, modular, and performant vanilla JavaScript adhering to modern standards.",
          "Dynamically manipulate the DOM and handle complex user interactions gracefully.",
          "Build resilient client-side state managers utilizing browser storage APIs."
        ]
      },
      {
        id: "m1-5",
        code: "GIT105",
        title: "Version Control Systems: Professional Git, GitHub & GitLab Workflows",
        duration: "Weeks 19–22 (48 Hours)",
        summary: "Industry-standard source code management, branching strategies, merge conflict resolution, pull request etiquette, and open-source collaboration.",
        topics: [
          {
            title: "Git Internals, Staging, Commits & History Inspection",
            description: "Understanding Git's DAG architecture, staging area, commit anatomy, commit conventions (Conventional Commits), git log, diff, and stash.",
            keyConcepts: ["Git object store (blobs, trees, commits)", "Conventional Commit messages", "git stash & git restore", "Inspecting diffs"],
            handsOnLab: "Creating a local repository, tracking versions, and rolling back bad commits safely.",
            recommendedTools: ["Git CLI", "GitKraken", "VS Code Source Control"]
          },
          {
            title: "Branching, Merging, Rebasing & Conflict Resolution",
            description: "Feature-branch workflows, Git Flow, merge strategies (fast-forward vs 3-way merge), interactive rebase, and resolving complex conflicts.",
            keyConcepts: ["git branch & git switch", "git merge vs git rebase", "Merge conflict markers & 3-way diffs", "git cherry-pick & git reset"],
            handsOnLab: "Simulating a 3-developer team repository with intentional concurrent edits and resolving conflicts step-by-step.",
            recommendedTools: ["Git Visualizer", "GitHub Desktop"]
          },
          {
            title: "Remote Repositories: GitHub / GitLab & Collaboration Lifecycle",
            description: "Configuring SSH keys, remote upstreams, Pull Requests (PRs), code reviews, issues, milestones, project boards, and GitHub Pages deployment.",
            keyConcepts: ["SSH authentication", "Forking & upstream remotes", "Pull Request templates & review comments", "GitHub Pages static hosting"],
            handsOnLab: "Contributing to an open-source style team repository with structured PR reviews, approvals, and automated GitHub Pages release.",
            recommendedTools: ["GitHub CLI (gh)", "GitHub Projects", "GitLab CI"]
          }
        ],
        outcomes: [
          "Execute full version control lifecycles using the Git command line.",
          "Comfortably resolve merge conflicts without losing work.",
          "Collaborate on multi-person engineering teams using GitHub Pull Requests and code reviews."
        ]
      },
      {
        id: "m1-6",
        code: "SEM1-CAP",
        title: "Semester 1 Capstone Project & Evaluation Defense",
        duration: "Weeks 23–24 (48 Hours)",
        summary: "Consolidate all Semester 1 skills into two production-grade deliverables reviewed via live code defense.",
        topics: [
          {
            title: "Capstone Project Development & Optimization",
            description: "End-to-end development of a responsive multi-page web application accompanied by a companion Chrome extension tool.",
            keyConcepts: ["Code structure modularity", "Lighthouse score optimization (>90 on all metrics)", "Accessibility audit", "Cross-browser testing"],
            handsOnLab: "Complete build, git tag releases, and write comprehensive README documentation.",
            recommendedTools: ["Lighthouse", "BrowserStack", "GitHub Pages"]
          }
        ],
        outcomes: [
          "Deploy two production-grade client-side applications live on the web.",
          "Present architecture and defend code quality in a technical review."
        ]
      }
    ],
    capstones: [
      {
        title: "Capstone 1A: Responsive SaaS Product Portal & Interactive Showcase",
        type: "Milestone Project",
        description: "A multi-page responsive corporate web application with dynamic pricing calculator, interactive feature tabs, contact validation engine, and dark/light theme switcher.",
        architecture: ["Semantic HTML5", "CSS Grid & Flexbox", "Modular Vanilla JS", "LocalStorage Theme State"],
        deliverables: ["Live GitHub Pages URL", "Semantic Markup & a11y 100 Score", "Cross-device responsive test report"],
        keyTools: ["VS Code", "Chrome DevTools", "Git & GitHub"]
      },
      {
        title: "Capstone 1B: 'DevLens' Chrome Productivity & Web Inspector Extension",
        type: "Milestone Project",
        description: "A Manifest V3 Chrome Extension that injects tools into any webpage to inspect font stacks, color palettes, heading hierarchies, image sizes, and asset loading speed.",
        architecture: ["Manifest V3", "Content Scripts", "Chrome Storage API", "Popup UI & Badge Counter"],
        deliverables: ["Packaged .crx Extension", "Source Code in GitHub Repo", "3-Minute Video Demo of Live Extension"],
        keyTools: ["Chrome DevTools", "Manifest V3", "VS Code"]
      }
    ],
    weeklySchedule: [
      { weekRange: "Weeks 1–3", phaseName: "Phase 1: Computing Core", focus: "Architecture, DNS, HTTP, Terminal & VS Code setup", milestone: "Scaffolded Dev Environment & Shell Scripts" },
      { weekRange: "Weeks 4–8", phaseName: "Phase 2: HTML5 & CSS3 Mastery", focus: "Semantic markup, Flexbox, Grid, fluid responsive design", milestone: "Pixel-Perfect Responsive 3-Page Website" },
      { weekRange: "Weeks 9–11", phaseName: "Phase 3: DevTools & Chrome Extensions", focus: "Inspect, Network tab, debugging, building Chrome extensions", milestone: "Published Custom Chrome Extension" },
      { weekRange: "Weeks 12–18", phaseName: "Phase 4: JavaScript Programming", focus: "Core JS, DOM manipulation, event systems, LocalStorage", milestone: "Interactive Web App with Form Engine" },
      { weekRange: "Weeks 19–22", phaseName: "Phase 5: Git & Team Workflows", focus: "Branching, merging, PR reviews, GitHub & GitLab", milestone: "Collaborative Multi-branch Team Project" },
      { weekRange: "Weeks 23–24", phaseName: "Phase 6: Sem 1 Capstone Defense", focus: "Final project builds, performance tuning, live defense", milestone: "Deployed Live Capstones & Review" }
    ]
  },
  {
    id: "sem-2",
    number: 2,
    roman: "II",
    title: "Modern Frontend, Backend Engineering & Database Systems",
    subtitle: "From Client Interfaces to Dynamic Full-Stack Client-Server Architectures",
    duration: "Months 7–12 • Weeks 25–48 • ~300 Practical Hours",
    level: "Intermediate Engineering",
    themeColor: "indigo",
    badgeBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
    borderColor: "border-indigo-500",
    accentColor: "#4f46e5",
    overview: "Transitions students from static web creation into professional software development: building reactive single-page applications with React.js, crafting robust RESTful backends with Node.js and Express, and engineering relational (PostgreSQL) and document (MongoDB) databases.",
    primaryGoal: "Students architect and deploy a complete client-server application featuring an interactive React frontend, custom Express API endpoints, SQL/NoSQL databases with relational schemas, and secure authentication.",
    technologies: [
      { category: "Frontend Framework", items: ["React.js", "JSX", "React Hooks", "Context API", "React Router v6", "Tailwind CSS"] },
      { category: "Backend Runtime", items: ["Node.js", "Express.js", "REST APIs", "Middleware", "Zod Validation", "JWT Auth"] },
      { category: "Databases", items: ["PostgreSQL", "SQL Queries", "Prisma ORM", "MongoDB", "Mongoose ODM"] },
      { category: "Testing & Tooling", items: ["Postman", "Thunder Client", "npm/pnpm", "ESLint", "Environment Config"] }
    ],
    modules: [
      {
        id: "m2-1",
        code: "JS201",
        title: "Advanced JavaScript & Asynchronous Architecture",
        duration: "Weeks 25–28 (48 Hours)",
        summary: "Master the JavaScript Event Loop, Callbacks, Promises, Async/Await, Fetch API, ES Modules, and Error Handling patterns.",
        topics: [
          {
            title: "The JavaScript Runtime, Event Loop & Concurrency",
            description: "How V8 executes code: Call stack, Web APIs, Task Queue, Microtask Queue (Promises), and non-blocking I/O execution model.",
            keyConcepts: ["V8 engine internals", "Call Stack vs Task Queue", "Microtask vs Macrotask prioritization", "Memory leaks & garbage collection"],
            handsOnLab: "Predicting and profiling event loop execution sequences using Loupe and browser performance profiler.",
            recommendedTools: ["Loupe Visualizer", "Node.js Performance Hooks"]
          },
          {
            title: "Asynchronous JavaScript: Promises, Async/Await & Error Handling",
            description: "Promise creation, Promise.all, Promise.allSettled, Promise.race, async/await syntax, try/catch/finally blocks, and custom error classes.",
            keyConcepts: ["Promise lifecycle (pending, fulfilled, rejected)", "Sequential vs parallel async execution", "Custom Error inheritance", "Graceful error recovery"],
            handsOnLab: "Building a resilient multi-source data fetcher with auto-retry mechanisms and timeout fallback.",
            recommendedTools: ["Postman Mock Server", "Public REST APIs (PokeAPI, GitHub API)"]
          },
          {
            title: "Modern ES6+ Modules, Fetch API & HTTP Request Handling",
            description: "ES Module import/export syntax, Fetch API (GET, POST, PUT, DELETE), setting headers, Bearer tokens, CORS handling, and streaming responses.",
            keyConcepts: ["Named vs default exports", "Request & Response objects", "Handling CORS errors", "Blob and JSON payload parsing"],
            handsOnLab: "Constructing a reusable HTTP Client class with request interceptors and centralized error logging.",
            recommendedTools: ["cURL", "Fetch Sandbox", "JSONPlaceholder"]
          }
        ],
        outcomes: [
          "Diagnose and solve complex asynchronous timing bugs.",
          "Write clean, async/await code with bulletproof error handling.",
          "Architect reusable API communication modules."
        ]
      },
      {
        id: "m2-2",
        code: "REACT202",
        title: "Modern React.js: Component Architecture, Hooks & State Management",
        duration: "Weeks 29–35 (84 Hours)",
        summary: "Declarative UI engineering with React: JSX, component lifecycle, useState, useEffect, useRef, useMemo, useCallback, Context API, custom hooks, and Tailwind CSS.",
        topics: [
          {
            title: "React Fundamentals: JSX, Virtual DOM & Component Hierarchy",
            description: "How React renders UI, Virtual DOM reconciliation, Fiber architecture basics, props vs state, unidirectional data flow, and conditional rendering.",
            keyConcepts: ["Virtual DOM diffing algorithm", "Pure components & immutability", "Lifting state up", "Props drilling resolution"],
            handsOnLab: "Building an interactive real-time dashboard layout with modular components.",
            recommendedTools: ["React DevTools", "Vite", "ESLint React Plugin"]
          },
          {
            title: "Mastering React Hooks & Side Effects",
            description: "In-depth useState, useEffect dependency arrays, cleanup functions, useRef for DOM access and mutable values, useMemo and useCallback for optimization.",
            keyConcepts: ["Effect cleanup lifecycles", "Avoiding infinite re-renders", "useRef for persistence without re-render", "Memoization tradeoffs"],
            handsOnLab: "Engineering a full audio synthesizer / music pad UI with real-time waveform updates and keyboard shortcuts.",
            recommendedTools: ["React Profiler", "Web Audio API"]
          },
          {
            title: "Global State Management with Context API & Custom Hooks",
            description: "Creating custom reusable hooks (useFetch, useLocalStorage, useDebounce), Context API providers, reducers with useReducer.",
            keyConcepts: ["Custom hook abstraction", "Context Provider pattern", "useReducer for complex state machines", "State selector optimization"],
            handsOnLab: "Building a complete Shopping Cart & Checkout state system with discount coupons and local persistence.",
            recommendedTools: ["React DevTools Component Tree"]
          },
          {
            title: "Client-Side Routing with React Router v6 & Tailwind CSS UI",
            description: "Nested routes, dynamic URL parameters, loaders/actions, protected routes (auth guards), 404 handlers, and rapid UI development with Tailwind CSS.",
            keyConcepts: ["BrowserRouter & Routes", "useNavigate & useParams", "Protected Route wrapper", "Utility-first CSS styling"],
            handsOnLab: "Building a multi-view streaming media catalog with search, filter, detail pages, and favorite lists.",
            recommendedTools: ["React Router v6", "Tailwind CSS IntelliSense"]
          }
        ],
        outcomes: [
          "Architect large-scale, performant Single Page Applications (SPAs) with React.",
          "Extract clean, reusable custom hooks for data fetching and UI state.",
          "Implement declarative routing, authentication guards, and responsive Tailwind UI."
        ]
      },
      {
        id: "m2-3",
        code: "NODE203",
        title: "Backend Engineering: Node.js, Express.js & RESTful API Design",
        duration: "Weeks 36–41 (72 Hours)",
        summary: "Server-side programming with Node.js, Express routing, middleware architecture, request validation, error handling, and RESTful API standards.",
        topics: [
          {
            title: "Node.js Core Architecture & Built-in Modules",
            description: "Node.js runtime, process object, File System (fs/promises), path, events, buffer, streams, and creating an HTTP server from scratch.",
            keyConcepts: ["CommonJS vs ES Modules", "fs module file manipulation", "Readable/Writable streams", "Process environment variables"],
            handsOnLab: "Building a CLI log analyzer tool that reads massive log files via streams and outputs JSON summaries.",
            recommendedTools: ["Node.js v20+", "dotenv", "tsx/nodemon"]
          },
          {
            title: "Express.js Framework & Layered Architecture",
            description: "Express application structure, routers, controllers, service layers, request parameters (params, query, body), and JSON response formatting.",
            keyConcepts: ["MVC / Controller-Service-Repository pattern", "Express Router modularization", "RESTful resource naming conventions", "HTTP status code semantics"],
            handsOnLab: "Architecting a modular REST API for a University Course Management system.",
            recommendedTools: ["Express.js", "Postman", "Thunder Client"]
          },
          {
            title: "Express Middleware, Request Validation & Centralized Error Handling",
            description: "Custom middleware pipeline, authentication checks, request logging (Morgan), schema validation with Zod, and global error handling middleware.",
            keyConcepts: ["Middleware next() chain", "Schema validation with Zod", "Global error handler middleware", "Custom AppError exception hierarchy"],
            handsOnLab: "Implementing a complete input sanitization and validation pipeline blocking malformed payloads.",
            recommendedTools: ["Zod", "Morgan", "Helmet"]
          }
        ],
        outcomes: [
          "Develop structured, maintainable backend APIs using Express and Node.js.",
          "Implement robust middleware pipelines for validation, logging, and error handling.",
          "Design industry-standard RESTful APIs adhering to HTTP best practices."
        ]
      },
      {
        id: "m2-4",
        code: "DB204",
        title: "Database Engineering: Relational SQL (PostgreSQL) & NoSQL (MongoDB)",
        duration: "Weeks 42–46 (60 Hours)",
        summary: "Database modeling, normalization, SQL queries, relational joins, indexing, ACID transactions, PostgreSQL with Prisma ORM, and MongoDB with Mongoose.",
        topics: [
          {
            title: "Relational Database Design & SQL Mastery (PostgreSQL)",
            description: "Relational modeling, primary & foreign keys, constraints, normalization (1NF, 2NF, 3NF), SELECT queries, GROUP BY, aggregations, JOINs (INNER, LEFT, FULL).",
            keyConcepts: ["Entity-Relationship (ER) Diagrams", "Normalization rules", "Complex JOIN queries & subqueries", "ACID properties & transactions"],
            handsOnLab: "Designing an E-commerce relational schema in PostgreSQL, executing complex reporting queries and transactions.",
            recommendedTools: ["PostgreSQL", "pgAdmin", "DBeaver", "TablePlus"]
          },
          {
            title: "Database Access with Modern ORMs: Prisma ORM",
            description: "Prisma schema definition, database migrations, model relations (1-1, 1-many, many-many), type-safe CRUD queries, and seeds.",
            keyConcepts: ["Prisma schema syntax", "Database migrations workflow", "Type-safe query builder", "Connection pooling"],
            handsOnLab: "Connecting an Express backend to PostgreSQL via Prisma ORM with automated migrations.",
            recommendedTools: ["Prisma Studio", "Prisma CLI"]
          },
          {
            title: "Document Databases: MongoDB & Mongoose ODM",
            description: "NoSQL document model, BSON format, MongoDB Atlas cloud setup, Mongoose schemas, validation, middleware hooks, and aggregation pipelines.",
            keyConcepts: ["Document vs Relational paradigm", "Mongoose schema & virtuals", "Embedding vs Referencing documents", "Aggregation pipeline ($match, $group, $sort)"],
            handsOnLab: "Building a social media content backend with nested comments, likes, and tag aggregation using MongoDB.",
            recommendedTools: ["MongoDB Atlas", "MongoDB Compass", "Mongoose"]
          }
        ],
        outcomes: [
          "Model relational and document database schemas suited to business requirements.",
          "Write optimized SQL queries and leverage modern ORMs for type-safe database access.",
          "Select the right database technology (SQL vs NoSQL) for specific system constraints."
        ]
      },
      {
        id: "m2-5",
        code: "SEM2-CAP",
        title: "Semester 2 Capstone: Integrated Full-Stack Application",
        duration: "Weeks 47–48 (36 Hours)",
        summary: "Build, integrate, test, and defend a complete end-to-end full-stack application connecting a React frontend to an Express + PostgreSQL/MongoDB backend.",
        topics: [
          {
            title: "Full-Stack Integration, API Wiring & Live Deployment",
            description: "Connecting React state to backend REST endpoints, handling loading/error states, CORS configuration, seed data, and deployment.",
            keyConcepts: ["Full-stack repository setup", "Environment configuration (.env)", "Cross-Origin Resource Sharing", "Database seeding"],
            handsOnLab: "Deploying backend API to Render/Railway and frontend to Vercel.",
            recommendedTools: ["Vercel", "Render", "Railway", "Postman"]
          }
        ],
        outcomes: [
          "Deliver a production-ready full-stack software application.",
          "Defend API architecture and database schema in technical oral review."
        ]
      }
    ],
    capstones: [
      {
        title: "Capstone 2A: Full-Stack E-Commerce & Inventory Management System",
        type: "Milestone Project",
        description: "Complete full-stack store with customer catalog, shopping cart, customer checkout, orders history, and admin panel for product inventory & sales analytics.",
        architecture: ["React.js Frontend", "Node.js & Express API", "PostgreSQL & Prisma ORM", "Tailwind CSS"],
        deliverables: ["Live Full-Stack App", "Documented Postman Collection", "Database ER Diagram & Schema Migration Scripts"],
        keyTools: ["React", "Express", "PostgreSQL", "Prisma", "Postman"]
      },
      {
        title: "Capstone 2B: Multi-User Project Collaboration & Task Workspace",
        type: "Milestone Project",
        description: "Trello/Asana style project workspace with board columns, task assignments, activity logs, file attachments, and user role management.",
        architecture: ["React.js", "Express REST API", "MongoDB & Mongoose", "Context API State"],
        deliverables: ["Live Deployed Web App", "Full REST API Swagger/OpenAPI Spec", "GitHub Repo with CI testing"],
        keyTools: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
      }
    ],
    weeklySchedule: [
      { weekRange: "Weeks 25–28", phaseName: "Phase 1: Async JS & Event Loop", focus: "Promises, Async/Await, V8 Event loop, Fetch API", milestone: "Resilient Async API Client Library" },
      { weekRange: "Weeks 29–35", phaseName: "Phase 2: React.js & SPA Development", focus: "JSX, Hooks, Context, React Router v6, Tailwind", milestone: "Feature-Complete Multi-Page React SPA" },
      { weekRange: "Weeks 36–41", phaseName: "Phase 3: Node.js & Express REST APIs", focus: "Server architecture, Routing, Middleware, Zod, Errors", milestone: "Production-Ready Modular REST API" },
      { weekRange: "Weeks 42–46", phaseName: "Phase 4: Database Engineering", focus: "PostgreSQL, SQL queries, Prisma ORM, MongoDB", milestone: "Normalized Relational & Document Databases" },
      { weekRange: "Weeks 47–48", phaseName: "Phase 5: Full-Stack Capstone Defense", focus: "End-to-end integration, deployment, live defense", milestone: "Deployed Full-Stack Production System" }
    ]
  },
  {
    id: "sem-3",
    number: 3,
    roman: "III",
    title: "Advanced Full-Stack, Real-Time Systems, Cloud & DevOps",
    subtitle: "Enterprise Frameworks, Authentication Security, WebSockets, Docker & Cloud Pipelines",
    duration: "Months 13–18 • Weeks 49–72 • ~300 Practical Hours",
    level: "Advanced Full-Stack & Cloud",
    themeColor: "amber",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
    borderColor: "border-amber-500",
    accentColor: "#d97706",
    overview: "Elevates developer skills to enterprise grade: mastering Next.js (SSR, Server Actions), robust authentication systems (JWT, OAuth2, RBAC), real-time WebSockets, Redis caching, third-party payment gateways (Stripe), Docker containerization, and automated CI/CD deployment pipelines.",
    primaryGoal: "Students engineer resilient, secure, and scalable cloud-hosted full-stack applications with real-time bidirectional communication, containerized microservices, and continuous deployment.",
    technologies: [
      { category: "Full-Stack Framework", items: ["Next.js (App Router)", "React Server Components", "Server Actions", "TypeScript", "Tailwind CSS"] },
      { category: "Auth & Security", items: ["JWT", "OAuth 2.0", "Role-Based Access (RBAC)", "Bcrypt", "CORS & Helmet", "Rate Limiting"] },
      { category: "Real-Time & Caching", items: ["WebSockets", "Socket.io", "Server-Sent Events", "Redis Caching", "Pub/Sub"] },
      { category: "Cloud & DevOps", items: ["Docker", "Docker Compose", "GitHub Actions CI/CD", "Nginx Reverse Proxy", "AWS/VPS Cloud"] }
    ],
    modules: [
      {
        id: "m3-1",
        code: "NEXT301",
        title: "Enterprise Full-Stack with Next.js & TypeScript",
        duration: "Weeks 49–54 (72 Hours)",
        summary: "Next.js App Router, React Server Components (RSC), Client Components, Server-Side Rendering (SSR), Static Site Generation (SSG), Server Actions, and full TypeScript adoption.",
        topics: [
          {
            title: "TypeScript for Full-Stack Developers",
            description: "Static type checking, interfaces, type aliases, generics, union/intersection types, type narrowing, and typing Express/React codebases.",
            keyConcepts: ["Generics in functions & interfaces", "Utility types (Partial, Pick, Omit)", "Strict type checking", "Zod-to-TypeScript type inference"],
            handsOnLab: "Migrating an entire JavaScript React/Express codebase to strict TypeScript with zero 'any' types.",
            recommendedTools: ["TypeScript Compiler", "ts-node", "TS Playground"]
          },
          {
            title: "Next.js App Router & React Server Components (RSC)",
            description: "File-system routing (page.tsx, layout.tsx, loading.tsx, error.tsx), RSC benefits, Client component boundaries ('use client'), and metadata management.",
            keyConcepts: ["Server vs Client components paradigm", "Streaming UI with Suspense", "Nested layouts & route groups", "Dynamic SEO metadata generation"],
            handsOnLab: "Building a lightning-fast News & Media publishing platform utilizing server components and streaming.",
            recommendedTools: ["Next.js 14+", "Vercel Analytics"]
          },
          {
            title: "Server Actions, Mutations & Data Fetching Caching",
            description: "Direct server mutations with Server Actions, revalidatePath, revalidateTag, cache controls, dynamic vs static rendering, and optimistic UI updates.",
            keyConcepts: ["Server Actions form handling", "Incremental Static Regeneration (ISR)", "Optimistic UI with useOptimistic", "Cache tags invalidation"],
            handsOnLab: "Developing an interactive Product Review and Rating portal with instant optimistic updates and server validation.",
            recommendedTools: ["Next.js DevTools", "Turbopack"]
          }
        ],
        outcomes: [
          "Build high-performance, SEO-optimized production applications with Next.js.",
          "Write clean, type-safe full-stack code using TypeScript.",
          "Implement optimal data fetching and caching architectures with Server Actions."
        ]
      },
      {
        id: "m3-2",
        code: "SEC302",
        title: "Advanced Authentication, Authorization & Web Security",
        duration: "Weeks 55–58 (48 Hours)",
        summary: "Industry-standard authentication: Password hashing, JSON Web Tokens (JWT), Refresh Token rotation, OAuth2 (Google/GitHub login), Role-Based Access Control (RBAC), and OWASP Top 10 defenses.",
        topics: [
          {
            title: "Cryptographic Password Hashing & JWT Architecture",
            description: "Salting & hashing with Bcrypt/Argon2, Access Token vs Refresh Token lifecycle, HTTP-only secure cookies, and token revocation strategies.",
            keyConcepts: ["Bcrypt work factors & salting", "JWT payload signature & expiration", "Silent token refresh with HTTP-only cookies", "XSS & CSRF token storage tradeoffs"],
            handsOnLab: "Building an enterprise Auth microservice with automatic refresh token rotation and multi-device session revocation.",
            recommendedTools: ["jwt.io", "Postman", "Crypto module"]
          },
          {
            title: "OAuth 2.0 / OpenID Connect & Social Logins",
            description: "OAuth2 authorization code grant flow, Google/GitHub social login integration, NextAuth.js / Auth.js, and user identity profile merging.",
            keyConcepts: ["Authorization Code flow", "Client ID & Client Secret security", "Scopes and consent screens", "Linking multi-provider identities"],
            handsOnLab: "Integrating Google & GitHub single-click OAuth authentication into a Next.js application.",
            recommendedTools: ["Google Cloud Console", "GitHub Developer Settings", "Auth.js"]
          },
          {
            title: "Role-Based Access Control (RBAC) & OWASP Security Defenses",
            description: "Granular permissions, user roles (Admin, Member, Guest), route middleware guards, SQL injection prevention, XSS mitigation, CSRF protection, rate limiting, and CORS.",
            keyConcepts: ["RBAC permission matrices", "OWASP Top 10 vulnerabilities", "Express Rate Limit & Helmet headers", "Content Security Policy (CSP)"],
            handsOnLab: "Conducting a security penetration test on an intentionally vulnerable app and patching all vulnerabilities.",
            recommendedTools: ["OWASP ZAP", "Helmet", "express-rate-limit"]
          }
        ],
        outcomes: [
          "Implement enterprise-grade JWT and OAuth2 authentication flows.",
          "Enforce role-based access control across frontend and backend services.",
          "Harden web applications against OWASP Top 10 vulnerabilities."
        ]
      },
      {
        id: "m3-3",
        code: "RT303",
        title: "Real-Time Systems, WebSockets & High-Performance Caching",
        duration: "Weeks 59–63 (60 Hours)",
        summary: "Bidirectional real-time communication with WebSockets (Socket.io), Server-Sent Events (SSE), Redis caching, Pub/Sub messaging, and database query optimization.",
        topics: [
          {
            title: "Bidirectional WebSockets & Socket.io Architecture",
            description: "WebSocket handshake, full-duplex communication, Socket.io rooms, namespaces, broadcasting, connection heartbeats, and reconnection management.",
            keyConcepts: ["HTTP Upgrade handshake", "Socket.io rooms & private channels", "Event acknowledgment callbacks", "Managing connection dropouts"],
            handsOnLab: "Building a multi-room real-time collaborative chat application with typing indicators, online status, and read receipts.",
            recommendedTools: ["Socket.io", "Postman WebSocket client"]
          },
          {
            title: "In-Memory Caching & Pub/Sub with Redis",
            description: "Redis data structures (strings, hashes, lists, sets), cache-aside pattern, TTL expiration, cache invalidation strategies, and Redis Pub/Sub for horizontal scaling.",
            keyConcepts: ["Cache-aside vs write-through", "Time-To-Live (TTL) strategies", "Cache stampede mitigation", "Redis Pub/Sub message broker"],
            handsOnLab: "Adding a high-throughput Redis caching layer to an API, reducing database latency from 250ms to 4ms.",
            recommendedTools: ["Redis CLI", "RedisInsight", "ioredis"]
          },
          {
            title: "Media Storage & Third-Party APIs (Stripe Payments, S3, Email)",
            description: "Direct cloud file uploads (AWS S3 / Cloudinary) with signed URLs, Stripe payment checkout & webhooks, and transactional emails with Resend.",
            keyConcepts: ["S3 presigned upload URLs", "Stripe payment intents & webhook validation", "Idempotency keys", "Transactional email templates"],
            handsOnLab: "Building a complete digital product checkout flow with Stripe webhooks and automated PDF receipt email dispatch.",
            recommendedTools: ["Stripe CLI", "AWS S3", "Resend / SendGrid"]
          }
        ],
        outcomes: [
          "Architect low-latency real-time applications using WebSockets.",
          "Implement high-performance caching layers with Redis.",
          "Integrate production third-party services like Stripe payments and S3 media storage."
        ]
      },
      {
        id: "m3-4",
        code: "OPS304",
        title: "Containerization, DevOps & Automated CI/CD Pipelines",
        duration: "Weeks 64–70 (72 Hours)",
        summary: "Docker containers, multi-stage Dockerfiles, Docker Compose multi-container orchestration, Linux server administration (VPS, Nginx, SSL), and GitHub Actions CI/CD.",
        topics: [
          {
            title: "Docker Containerization & Multi-Stage Builds",
            description: "Containers vs Virtual Machines, Dockerfile instructions, layer caching, multi-stage builds for minimal production images, and .dockerignore.",
            keyConcepts: ["Docker images & container lifecycles", "Multi-stage build optimization", "Container networking & port mapping", "Volume persistence"],
            handsOnLab: "Containerizing a Next.js frontend, Node.js API, and PostgreSQL database into lightweight production Docker images.",
            recommendedTools: ["Docker Desktop", "Docker CLI", "Dive image analyzer"]
          },
          {
            title: "Multi-Service Orchestration with Docker Compose",
            description: "Defining multi-container architectures in docker-compose.yml: App, DB, Redis, Nginx, environment variable propagation, and healthchecks.",
            keyConcepts: ["docker-compose service dependencies (depends_on)", "Named volumes & custom networks", "Healthcheck probes", "One-command local dev spin-up"],
            handsOnLab: "Setting up a 1-command reproducible full-stack development environment with Docker Compose.",
            recommendedTools: ["Docker Compose", "Docker Volumes"]
          },
          {
            title: "Linux Server Administration, Nginx Reverse Proxy & SSL",
            description: "Configuring Ubuntu cloud VPS (AWS EC2 / DigitalOcean), SSH keys, UFW firewalls, systemd processes, Nginx reverse proxy configuration, and Let's Encrypt SSL.",
            keyConcepts: ["SSH hardened access", "Nginx server blocks & proxy_pass", "Certbot automated SSL certificates", "Zero-downtime reload with PM2/Docker"],
            handsOnLab: "Provisioning a live Linux VPS, configuring Nginx to reverse proxy port 3000 to custom domains with HTTPS.",
            recommendedTools: ["Ubuntu Linux", "Nginx", "Certbot", "OpenSSH"]
          },
          {
            title: "CI/CD Automation with GitHub Actions",
            description: "Automated Continuous Integration and Continuous Deployment: Workflow YAML, automated lint/test triggers on Pull Requests, and automated Docker build and deploy.",
            keyConcepts: ["GitHub Actions triggers (push, pull_request)", "Runner environments & matrix testing", "GitHub Secrets management", "Automated deployment webhooks"],
            handsOnLab: "Creating a production CI/CD pipeline that runs automated tests and deploys code to production automatically on git push to main.",
            recommendedTools: ["GitHub Actions", "SSH Action", "Docker Hub"]
          }
        ],
        outcomes: [
          "Package full-stack applications into optimized production Docker containers.",
          "Provision and secure Linux cloud servers with Nginx reverse proxy and SSL.",
          "Build automated CI/CD pipelines deploying tested code without manual intervention."
        ]
      },
      {
        id: "m3-5",
        code: "SEM3-CAP",
        title: "Semester 3 Capstone: Production Cloud SaaS Platform",
        duration: "Weeks 71–72 (48 Hours)",
        summary: "Design, containerize, and deploy a production-grade multi-tenant SaaS application with real-time features, Stripe billing, Redis caching, and automated CI/CD.",
        topics: [
          {
            title: "Production SaaS Deployment & Live Systems Defense",
            description: "Finalizing cloud deployment, load testing, uptime monitoring, error logging with Sentry, and presenting the architecture.",
            keyConcepts: ["Load testing with k6", "Error tracking with Sentry", "Zero-downtime updates", "Technical architecture presentation"],
            handsOnLab: "Deploying the complete SaaS system to live domain with active SSL, running load tests and presenting to an engineering panel.",
            recommendedTools: ["k6 Load Tester", "Sentry", "Vercel / Cloud VPS"]
          }
        ],
        outcomes: [
          "Deploy an enterprise-grade cloud SaaS application with real users.",
          "Defend cloud infrastructure, security, and scalability decisions."
        ]
      }
    ],
    capstones: [
      {
        title: "Capstone 3A: Real-Time Multi-Room Collaborative Whiteboard & Chat",
        type: "Milestone Project",
        description: "Figma-like live whiteboard canvas with multi-user cursor tracking, shape drawing, real-time audio/chat channels, and state synchronization.",
        architecture: ["Next.js (App Router)", "Socket.io WebSockets", "Redis Pub/Sub & Caching", "PostgreSQL", "Docker Compose"],
        deliverables: ["Live Hosted App with Custom Domain", "Stress Test Report with 100+ simulated concurrent connections", "CI/CD Workflow Config"],
        keyTools: ["Next.js", "Socket.io", "Redis", "Docker", "GitHub Actions"]
      },
      {
        title: "Capstone 3B: Subscription SaaS Platform with Stripe Billing & RBAC",
        type: "Milestone Project",
        description: "Production SaaS platform featuring Tiered subscriptions (Free, Pro, Enterprise), Stripe webhook billing, team workspaces, RBAC permissions, and S3 file asset management.",
        architecture: ["TypeScript Full-Stack", "Next.js 14", "Stripe API & Webhooks", "Prisma + PostgreSQL", "AWS S3", "Dockerized VPS"],
        deliverables: ["Live Production URL", "Automated GitHub Actions Deployment Pipeline", "Security Audit Checklist & Sentry Error Dashboard"],
        keyTools: ["Next.js", "TypeScript", "Stripe", "AWS S3", "Docker", "Nginx"]
      }
    ],
    weeklySchedule: [
      { weekRange: "Weeks 49–54", phaseName: "Phase 1: Next.js & TypeScript", focus: "App Router, RSC, Server Actions, strict TypeScript", milestone: "Full-Stack Next.js 14 Web Application" },
      { weekRange: "Weeks 55–58", phaseName: "Phase 2: Auth, Security & RBAC", focus: "JWT, OAuth2, Refresh tokens, RBAC, OWASP Top 10", milestone: "Hardened Multi-Tenant Auth Service" },
      { weekRange: "Weeks 59–63", phaseName: "Phase 3: Real-Time, Redis & Stripe", focus: "WebSockets, Socket.io, Redis caching, Stripe billing", milestone: "Real-Time Billing & Notification System" },
      { weekRange: "Weeks 64–70", phaseName: "Phase 4: Docker, Linux & CI/CD", focus: "Docker Compose, VPS, Nginx, SSL, GitHub Actions", milestone: "Automated Continuous Deployment Pipeline" },
      { weekRange: "Weeks 71–72", phaseName: "Phase 5: Cloud SaaS Defense", focus: "SaaS final build, load testing, live architecture defense", milestone: "Deployed Live Production Cloud SaaS" }
    ]
  },
  {
    id: "sem-4",
    number: 4,
    roman: "IV",
    title: "Professional Architecture, Mobile, AI Systems & Industry Launchpad",
    subtitle: "Enterprise Software Engineering, Flutter Mobile, Applied AI/LLMs & Job Readiness",
    duration: "Months 19–24 • Weeks 73–96 • ~300 Practical Hours",
    level: "Industry Professional & AI",
    themeColor: "violet",
    badgeBg: "bg-violet-50 text-violet-800 border-violet-200",
    borderColor: "border-violet-500",
    accentColor: "#7c3aed",
    overview: "Transforms students into versatile, senior-ready software engineers: mastering Clean Architecture and Design Patterns, comprehensive automated testing (Unit, Integration, E2E), cross-platform mobile app development with Flutter & Dart, Generative AI SDK integrations (Gemini API, RAG, Agents), Agile project leadership, and complete technical interview mastery.",
    primaryGoal: "Students build and launch their Grand Capstone (a cross-platform AI-integrated enterprise software suite) and graduate fully prepared for Software Engineer, Full-Stack Developer, and Mobile Developer roles.",
    technologies: [
      { category: "Software Architecture", items: ["Clean Architecture", "SOLID Principles", "Design Patterns", "Clean Code", "System Design", "Microservices"] },
      { category: "Testing & QA", items: ["Jest / Vitest", "React Testing Library", "Supertest API Tests", "Playwright E2E", "TDD Workflow"] },
      { category: "Mobile Engineering", items: ["Flutter", "Dart", "Provider / Riverpod", "REST API Mobile Integration", "Firebase Push Notifications"] },
      { category: "Applied AI & LLMs", items: ["Google Gemini API", "LLM Function Calling", "RAG & Vector Search", "Prompt Engineering", "AI Chatbots"] },
      { category: "Career & Leadership", items: ["DSA Patterns (LeetCode)", "System Design Mock Interviews", "Portfolio & Resume", "Agile/Scrum (Jira)"] }
    ],
    modules: [
      {
        id: "m4-1",
        code: "ARCH401",
        title: "Software Engineering Principles, Clean Architecture & Design Patterns",
        duration: "Weeks 73–76 (48 Hours)",
        summary: "Write maintainable enterprise code: SOLID principles, Clean Code practices, GoF Design Patterns (Factory, Observer, Singleton, Strategy, Repository), and High-Level System Design.",
        topics: [
          {
            title: "SOLID Principles & Clean Code in Practice",
            description: "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion, DRY, KISS, and code refactoring strategies.",
            keyConcepts: ["SOLID code refactoring", "Dependency Injection (DI) containers", "Code smells identification", "Cyclomatic complexity reduction"],
            handsOnLab: "Refactoring a 1,000-line monolithic codebase into a pristine, decoupled SOLID architecture with dependency injection.",
            recommendedTools: ["SonarQube", "Code Climate", "TypeScript"]
          },
          {
            title: "Design Patterns in Modern Software Engineering",
            description: "Creational (Factory, Builder, Singleton), Structural (Adapter, Decorator, Facade), and Behavioral (Observer, Strategy, Repository) patterns applied to real code.",
            keyConcepts: ["Repository pattern for data abstraction", "Observer pattern for event buses", "Strategy pattern for interchangeable payment engines", "Factory pattern for dynamic modules"],
            handsOnLab: "Building an extensible Multi-Provider Notification Engine (Email, SMS, Push, Slack) using Strategy and Factory design patterns.",
            recommendedTools: ["UML Diagrammers (Mermaid.js)", "Draw.io"]
          },
          {
            title: "System Design Fundamentals for Scalable Software",
            description: "High-level architecture design: Monolith vs Microservices, Horizontal vs Vertical scaling, Load Balancers, Database Sharding, Read Replicas, and Message Brokers (RabbitMQ/Kafka basics).",
            keyConcepts: ["CAP Theorem & High Availability", "Database read-replicas & partitioning", "Message queues & asynchronous workers", "API Gateway patterns"],
            handsOnLab: "Designing the full architectural blueprint for a ride-sharing service handling 100,000 requests/sec with diagram specs.",
            recommendedTools: ["Excalidraw", "Mermaid.js", "System Design Primer"]
          }
        ],
        outcomes: [
          "Apply SOLID principles and design patterns to solve complex enterprise problems.",
          "Refactor legacy code into modular, maintainable software architectures.",
          "Design scalable, fault-tolerant distributed systems and communicate architectures effectively."
        ]
      },
      {
        id: "m4-2",
        code: "TEST402",
        title: "Automated Testing, Quality Assurance & Test-Driven Development (TDD)",
        duration: "Weeks 77–80 (48 Hours)",
        summary: "Comprehensive software testing pyramid: Unit testing with Jest/Vitest, Component testing with React Testing Library, API integration testing with Supertest, and End-to-End (E2E) testing with Playwright.",
        topics: [
          {
            title: "Unit Testing & Test-Driven Development (TDD)",
            description: "Writing testable code, AAA pattern (Arrange-Act-Assert), test runners (Vitest/Jest), mocks, spies, stubs, code coverage metrics (>80%), and TDD red-green-refactor cycles.",
            keyConcepts: ["Vitest assertion library", "Mocking external dependencies", "Code coverage thresholds", "Test-Driven Development mindset"],
            handsOnLab: "Developing a complete financial ledger calculator strictly utilizing TDD from scratch.",
            recommendedTools: ["Vitest", "Jest", "c8 Coverage"]
          },
          {
            title: "Frontend Component Testing & Backend API Testing",
            description: "Testing React components with React Testing Library, user event simulation, accessibility assertions, and backend REST API testing with Supertest and test databases.",
            keyConcepts: ["Testing user interactions (screen.getByRole)", "Mocking API calls (MSW - Mock Service Worker)", "Supertest HTTP endpoint assertions", "Test database isolation & teardown"],
            handsOnLab: "Building a comprehensive test suite for a full-stack authentication and checkout flow.",
            recommendedTools: ["React Testing Library", "Mock Service Worker (MSW)", "Supertest"]
          },
          {
            title: "End-to-End (E2E) Testing with Playwright",
            description: "Automating browser actions with Playwright, visual regression testing, cross-browser test suites (Chromium, Firefox, WebKit), CI integration, and test artifacts.",
            keyConcepts: ["Playwright test fixtures", "Page Object Model (POM) pattern", "Handling async race conditions", "Running headless E2E tests in GitHub Actions"],
            handsOnLab: "Writing automated E2E tests covering the complete critical user checkout journey with video recordings and failure traces.",
            recommendedTools: ["Playwright Test", "Playwright Trace Viewer"]
          }
        ],
        outcomes: [
          "Construct a bulletproof testing pyramid achieving high automated code coverage.",
          "Practice Test-Driven Development to produce resilient, bug-free software.",
          "Automate cross-browser E2E regression test suites in CI pipelines."
        ]
      },
      {
        id: "m4-3",
        code: "MOB403",
        title: "Cross-Platform Mobile Application Development (Flutter & Dart)",
        duration: "Weeks 81–85 (60 Hours)",
        summary: "Building native mobile apps for Android and iOS using Flutter and Dart: Widget trees, State Management (Provider/Riverpod), Device APIs, REST API integration, and Firebase push notifications.",
        topics: [
          {
            title: "Dart Programming & Flutter Framework Architecture",
            description: "Dart language (null safety, OOP, async/await, streams), Flutter rendering engine, Stateless vs Stateful widgets, layout widgets (Column, Row, Stack, ListView).",
            keyConcepts: ["Dart sound null safety", "Widget tree composition & rebuilds", "Material Design & Cupertino components", "Responsive mobile layouts"],
            handsOnLab: "Building a multi-screen mobile travel discovery app with smooth Hero transitions and animations.",
            recommendedTools: ["Flutter SDK", "Android Studio / Emulator", "Dart DevTools"]
          },
          {
            title: "State Management & Device API Integration in Flutter",
            description: "State management using Provider / Riverpod, local caching (SharedPreferences, Hive), accessing camera, geolocation, offline sync, and REST API consumption (Dio/Http).",
            keyConcepts: ["Provider / Riverpod reactive state", "Local storage with Hive", "Geolocator & Camera device plugins", "Dio interceptors for mobile API tokens"],
            handsOnLab: "Creating a mobile Field Inspection App with offline photo storage and automated background sync when online.",
            recommendedTools: ["Riverpod", "Dio", "Hive DB"]
          },
          {
            title: "Firebase Integration, Push Notifications & App Release Builds",
            description: "Firebase Authentication, Cloud Firestore mobile client, Firebase Cloud Messaging (FCM) push notifications, and generating signed release APKs and app bundles.",
            keyConcepts: ["Firebase Core & Auth setup", "FCM push notification payloads & background handlers", "Android keystore signing", "Google Play Store deployment workflow"],
            handsOnLab: "Publishing a complete Android app APK with push notification handling and live backend connectivity.",
            recommendedTools: ["Firebase Console", "Android Keystore Tool", "Flutter Build"]
          }
        ],
        outcomes: [
          "Develop cross-platform mobile apps for Android and iOS using Flutter.",
          "Implement reactive state management and integrate native hardware capabilities.",
          "Connect mobile clients securely to backend REST APIs and push notification servers."
        ]
      },
      {
        id: "m4-4",
        code: "AI404",
        title: "Applied AI Engineering: Generative AI, Gemini APIs & LLM Integration",
        duration: "Weeks 86–89 (48 Hours)",
        summary: "Integrate modern AI capabilities into web and mobile software: Google Gemini API, Prompt Engineering, Structured Output, LLM Function Calling, Retrieval-Augmented Generation (RAG), and AI Agents.",
        topics: [
          {
            title: "Generative AI Foundations & Gemini SDK Integration",
            description: "How Large Language Models (LLMs) work, tokens, temperature, context windows, using the modern `@google/genai` TypeScript SDK, streaming AI responses, and multimodal inputs (text, image, audio).",
            keyConcepts: ["@google/genai SDK setup", "Streaming responses to UI in real-time", "Multimodal prompting (Image + Text analysis)", "System instructions & guardrails"],
            handsOnLab: "Building an AI-Powered Code Reviewer and Invoice Analyzer that extracts structured JSON data from uploaded images.",
            recommendedTools: ["Google AI Studio", "@google/genai SDK", "Gemini 2.0 / 1.5 Flash"]
          },
          {
            title: "Prompt Engineering, Structured JSON Outputs & Function Calling",
            description: "Few-shot prompting, chain-of-thought, enforcing strict JSON schemas with responseSchema, tool calling (function calling) allowing LLMs to query databases and external APIs.",
            keyConcepts: ["Schema-constrained structured JSON output", "LLM Function Calling declarations", "Executing server-side tool handlers", "Looping multi-turn agent interactions"],
            handsOnLab: "Creating an autonomous AI Database Query Assistant that converts natural language into SQL, runs the query safely, and charts results.",
            recommendedTools: ["Gemini Function Calling", "Zod Schema validation"]
          },
          {
            title: "Retrieval-Augmented Generation (RAG) & Vector Embeddings",
            description: "Vector embeddings, cosine similarity, Vector databases (Pinecone / pgvector in PostgreSQL), chunking strategies, semantic search, and grounding AI responses in private documentation.",
            keyConcepts: ["Text embedding models", "pgvector extension in PostgreSQL", "Semantic search vs keyword search", "RAG context injection pipeline"],
            handsOnLab: "Developing a 'Chat with Your Company Documentation' enterprise RAG assistant with accurate source citation.",
            recommendedTools: ["pgvector", "LangChain / AI SDK", "PostgreSQL"]
          }
        ],
        outcomes: [
          "Integrate Gemini AI models into production web and mobile applications.",
          "Build AI assistants utilizing structured JSON outputs and function calling tools.",
          "Engineer Retrieval-Augmented Generation (RAG) systems with vector databases."
        ]
      },
      {
        id: "m4-5",
        code: "IND405",
        title: "Agile Leadership, Project Management & Career Launchpad",
        duration: "Weeks 90–94 (60 Hours)",
        summary: "Industry workflows: Agile/Scrum sprints with Jira/Linear, technical communication, DSA interview patterns (LeetCode 75), high-impact portfolio engineering, and live mock interview panels.",
        topics: [
          {
            title: "Agile Methodologies, Scrum Sprints & Team Collaboration",
            description: "Scrum framework (Sprint planning, daily standups, backlog grooming, retrospectives), user stories, acceptance criteria, story points, and task tracking on Jira/Linear.",
            keyConcepts: ["User stories & definition of done", "Sprint burn-down charts", "PR code review etiquette", "Agile estimation techniques"],
            handsOnLab: "Managing the final Capstone project in 2-week Agile sprints using Jira with daily standups and sprint reviews.",
            recommendedTools: ["Jira Software", "Linear", "Confluence"]
          },
          {
            title: "Data Structures & Algorithms (DSA) Patterns for Technical Interviews",
            description: "Mastering the top 14 technical coding patterns: Two Pointers, Sliding Window, Fast & Slow Pointers, BFS/DFS Tree & Graph traversals, Dynamic Programming basics, and Big-O time/space analysis.",
            keyConcepts: ["Big-O Space/Time complexity", "Sliding window string/array problems", "Hash map frequency counters", "Binary search & tree traversals"],
            handsOnLab: "Solving and explaining 50 curated LeetCode Medium problems with optimal time/space complexity.",
            recommendedTools: ["LeetCode", "NeetCode", "HackerRank"]
          },
          {
            title: "High-Impact Developer Portfolio, Resume & Mock Interview Mastery",
            description: "Building an elite developer portfolio website, optimizing GitHub repositories (READMEs, architecture diagrams, live demos), LinkedIn optimization, behavioral interview preparation (STAR method), and system design defense.",
            keyConcepts: ["Portfolio architecture presentation", "STAR method for behavioral questions", "Whiteboard coding communication", "Freelancing & salary negotiation strategies"],
            handsOnLab: "Conducting 2 full-length simulated technical interviews (Coding + System Design + Behavioral) with industry mentors.",
            recommendedTools: ["GitHub Pages", "Pramp / Interviewing.io", "LinkedIn"]
          }
        ],
        outcomes: [
          "Navigate professional Agile/Scrum engineering team environments confidently.",
          "Solve coding and algorithmic problems in live technical interview settings.",
          "Present a stellar production portfolio showcasing full-stack, mobile, and AI capabilities."
        ]
      },
      {
        id: "m4-6",
        code: "SEM4-CAP",
        title: "Grand Industry Capstone Project & Graduation Defense",
        duration: "Weeks 95–96 (48 Hours)",
        summary: "The ultimate 2-year capstone: Designing, building, testing, deploying, and publicly presenting an enterprise-grade software system encompassing Web, Mobile, Cloud Backend, and Applied AI.",
        topics: [
          {
            title: "Grand Capstone Deployment, Public Demo & Final Graduation Review",
            description: "Full production launch, documentation package, mobile APK release, automated CI/CD pipeline, performance benchmark report, and presentation to industry judges.",
            keyConcepts: ["End-to-end software integration", "Production monitoring & reliability", "Public technical documentation", "Final graduation thesis defense"],
            handsOnLab: "Deliver the live keynote demonstration and code review defense of the Grand Capstone software suite.",
            recommendedTools: ["Cloud VPS", "Google Play Console", "Vercel", "GitHub"]
          }
        ],
        outcomes: [
          "Graduate with an industry-grade, production-deployed enterprise software suite.",
          "Step into professional software engineering roles with complete confidence and proof of work."
        ]
      }
    ],
    capstones: [
      {
        title: "Grand Industry Capstone: 'NexusAI' Cross-Platform Intelligent Enterprise Operations Suite",
        type: "Grand Capstone",
        description: "An enterprise-grade cross-platform operations management platform featuring a high-performance Next.js 14 Web Portal, a Flutter Android Mobile App, an Express + PostgreSQL backend, real-time WebSocket communication, automated CI/CD pipelines, and an embedded Gemini AI Copilot providing natural-language data analytics, automated reporting, and intelligent task routing.",
        architecture: [
          "Web Frontend: Next.js 14 (App Router) + TypeScript + Tailwind CSS",
          "Mobile App: Flutter + Dart (Android & iOS with Push Notifications)",
          "Backend API: Node.js + Express + Prisma ORM + PostgreSQL",
          "Real-Time & Cache: Socket.io WebSockets + Redis Pub/Sub",
          "AI Intelligence: Google Gemini 2.0 API with Function Calling & RAG",
          "DevOps: Docker Compose, Nginx Reverse Proxy, SSL, Automated GitHub Actions CI/CD"
        ],
        deliverables: [
          "Live Public Web App URL with SSL & Custom Domain",
          "Signed Android Mobile APK release ready for device install",
          "Comprehensive Technical Documentation (OpenAPI Spec, ER Diagrams, Architecture Map)",
          "100% Automated Test Suite (Unit, Integration, E2E via Playwright) in CI Pipeline",
          "15-Minute Live Product Demonstration & Code Defense Presentation"
        ],
        keyTools: ["Next.js", "Flutter", "PostgreSQL", "Docker", "Gemini AI", "GitHub Actions", "Redis", "Playwright"]
      }
    ],
    weeklySchedule: [
      { weekRange: "Weeks 73–76", phaseName: "Phase 1: Architecture & SOLID", focus: "Clean Architecture, SOLID, Design Patterns, System Design", milestone: "Modular Enterprise Engine Architecture" },
      { weekRange: "Weeks 77–80", phaseName: "Phase 2: Automated Testing & TDD", focus: "Vitest, React Testing Library, Supertest, Playwright", milestone: "100% Covered Automated Test Suite" },
      { weekRange: "Weeks 81–85", phaseName: "Phase 3: Flutter Mobile Development", focus: "Flutter, Dart, Riverpod, Mobile APIs, Firebase Push", milestone: "Native Android App with API Integration" },
      { weekRange: "Weeks 86–89", phaseName: "Phase 4: Applied AI & Gemini SDK", focus: "Gemini API, Function Calling, Prompting, RAG & pgvector", milestone: "Intelligent AI Assistant Module" },
      { weekRange: "Weeks 90–94", phaseName: "Phase 5: Agile, DSA & Career Launch", focus: "Jira Sprints, LeetCode DSA Patterns, Portfolio & Resumes", milestone: "Polished Portfolio & Interview Readiness" },
      { weekRange: "Weeks 95–96", phaseName: "Phase 6: Grand Capstone Defense", focus: "Production deployment, APK builds, final graduation demo", milestone: "Graduate as Job-Ready Software Engineer" }
    ]
  }
];

export const TOOL_CATEGORIES = [
  {
    category: "Languages & Frameworks",
    tools: [
      { name: "HTML5 & CSS3", level: "Sem 1", desc: "Modern semantic structure & responsive grid/flex layouts" },
      { name: "JavaScript (ES6+)", level: "Sem 1–2", desc: "Core algorithms, DOM APIs, async/await & Event Loop" },
      { name: "TypeScript", level: "Sem 3–4", desc: "Strict static typing, interfaces, generics & enterprise code" },
      { name: "React.js", level: "Sem 2", desc: "Component architecture, hooks, state management & SPAs" },
      { name: "Next.js", level: "Sem 3", desc: "App router, Server Components, SSR, SSG & Server Actions" },
      { name: "Node.js & Express", level: "Sem 2–3", desc: "Backend runtime, REST APIs, middleware & microservices" },
      { name: "Flutter & Dart", level: "Sem 4", desc: "Cross-platform mobile apps for Android & iOS" }
    ]
  },
  {
    category: "Developer Tooling & Debugging",
    tools: [
      { name: "Chrome DevTools", level: "Sem 1", desc: "Inspect element, console, network tab & performance profiler" },
      { name: "Chrome Extensions", level: "Sem 1", desc: "Manifest V3 extensions, content scripts & popup tools" },
      { name: "VS Code", level: "Sem 1–4", desc: "Configured IDE, debugging breakpoints, linting & snippets" },
      { name: "Git, GitHub & GitLab", level: "Sem 1–4", desc: "Version control, branching, PR reviews & team collaboration" },
      { name: "Postman & Thunder Client", level: "Sem 2–3", desc: "API endpoint testing, mock servers & automated test suites" },
      { name: "Playwright & Vitest", level: "Sem 4", desc: "Unit testing, integration testing & cross-browser E2E testing" }
    ]
  },
  {
    category: "Databases, Cloud & DevOps",
    tools: [
      { name: "PostgreSQL & MySQL", level: "Sem 2–4", desc: "Relational modeling, complex queries, joins & ACID transactions" },
      { name: "Prisma ORM", level: "Sem 2–3", desc: "Type-safe database migrations and query builder" },
      { name: "MongoDB & Mongoose", level: "Sem 2", desc: "NoSQL document schemas, ODM hooks & aggregation pipelines" },
      { name: "Redis", level: "Sem 3", desc: "In-memory caching, sub-millisecond lookups & Pub/Sub" },
      { name: "Docker & Docker Compose", level: "Sem 3–4", desc: "Containerization, multi-stage builds & multi-container stacks" },
      { name: "Linux, Nginx & SSL", level: "Sem 3", desc: "Ubuntu VPS management, reverse proxying & automated HTTPS" },
      { name: "GitHub Actions CI/CD", level: "Sem 3–4", desc: "Automated test validation and continuous deployment pipelines" }
    ]
  },
  {
    category: "AI, APIs & Production Ecosystem",
    tools: [
      { name: "Google Gemini AI SDK", level: "Sem 4", desc: "Generative AI, multimodal analysis, prompt engineering & RAG" },
      { name: "Stripe API", level: "Sem 3", desc: "Subscription billing, payment intents & webhook handling" },
      { name: "Socket.io WebSockets", level: "Sem 3", desc: "Full-duplex real-time bidirectional communication" },
      { name: "Firebase (FCM & Auth)", level: "Sem 4", desc: "Push notifications, mobile auth & cloud data sync" },
      { name: "Jira / Linear", level: "Sem 4", desc: "Agile/Scrum sprints, user stories & project management" }
    ]
  }
];

export const EVALUATION_CRITERIA = [
  {
    category: "Hands-on Coding & Weekly Lab Submissions",
    weight: "35%",
    description: "Weekly practical coding challenges, algorithm submissions, and active GitHub commit hygiene.",
    benchmark: "Minimum 80% passing score on automated unit tests and code quality rubrics."
  },
  {
    category: "Semester Capstone Projects & Code Defense",
    weight: "35%",
    description: "Comprehensive production projects built at the end of each semester, presented and defended live before an engineering mentor panel.",
    benchmark: "Live deployed URL, 100% clean documentation, and thorough oral explanation of architectural choices."
  },
  {
    category: "Mid-Term Technical Assessments & Code Reviews",
    weight: "15%",
    description: "Mid-semester written and practical coding examinations assessing core theoretical and troubleshooting concepts.",
    benchmark: "Demonstrated mastery of debugging, data structures, and framework lifecycles."
  },
  {
    category: "Professional Discipline & Engineering Etiquette",
    weight: "15%",
    description: "Quality of Git commit messages, Pull Request reviews, documentation completeness, and teamwork in Agile sprints.",
    benchmark: "Adherence to industry code formatting, accessibility guidelines, and collaborative conduct."
  }
];
