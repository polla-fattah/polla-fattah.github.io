---
layout: post
title: "Inside Modern Front-End Engineering"
subtitle: "A chapter-by-chapter tour of how the book moves from the browser to architectural decisions"
excerpt: "A tour of the eighteen chapters of my book Modern Front-End Engineering, from browser internals to architectural decisions, with two diagrams of its key ideas."
date: 2026-10-02 10:00:00 +0300
background: '/img/posts/2026-10-02-modern-front-end-engineering/banner.webp'
categories: ["Books", "Web Development", "Front-End", "Software Architecture"]
author: "Polla Fattah"
usemathjax: false
project_url: "https://polla.dev/frontend-book/"
---

{% include image.html url="/img/posts/2026-10-02-modern-front-end-engineering/cover.webp" description="Cover of Modern Front-End Engineering: From Browser Fundamentals to Production Architecture" %}

Front-end books tend to age quickly when they are organised around a framework. I organised *Modern Front-End Engineering* around a question instead: *what is the browser doing, and what does that mean for the decisions you make?* The thesis is that understanding the platform should guide framework choices, rather than framework syntax dictating how you see the platform. React and Vue appear as comparisons, not as the point.

The chapters move from the runtime, to structure, to data, to scale, and finally to the discipline of deciding. This post follows that order and explains what each chapter is for and why it sits where it does. The book is at [polla.dev/frontend-book](https://polla.dev/frontend-book/), and it expects readers who already know basic HTML, CSS, JavaScript, and the command line.

## Part 1: Platform foundations (Chapters 1–5)

**1. The Modern Web Platform & Browser Internals.** The chapter's first claim is that an application depends on more than the JavaScript language: the browser loads resources, builds a document, applies styles, handles input, and presents frames. That is why `fetch()`, timers, and `requestAnimationFrame()` exist at all: they belong to the host, not the language. The sections *Follow the document from navigation to discovery*, *Build the DOM while scripts become available*, and *Turn document state into pixels* trace the pipeline a page follows, and *Test the model with DevTools* has the reader check the theory against reality.

**2. Semantic HTML, Accessibility, Internationalization & the DOM.** The first section, *HTML Describes Meaning, Not Appearance*, sets up the whole chapter. Later sections introduce the accessibility tree and accessible names, then the live DOM and event architecture. I place accessibility and internationalization this early, before components and state, so that they are foundations and not retrofits. The section *Misconceptions to Leave Behind* is there because many readers arrive with habits that need correcting.

**3. Modern CSS Architecture & Layout Systems.** The first section is *The Cascade Is the Foundation*, and the rest builds on it: cascade layers to control precedence architecturally, intrinsic sizing, container-aware responsive systems, and modern selectors. "Architecture" in the title is meant literally. CSS is treated as a system with rules for ownership, not a pile of overrides.

**4. Modern JavaScript & Asynchronous Programming.** Lexical scope and closures, objects and prototypes, ES modules as architectural boundaries, then the microtask queue and promises before `async` and `await`. The order matters. Readers who learn `async` and `await` first tend to treat them as syntax. Readers who learn the queue first can see why code runs when it does.

**5. TypeScript, Runtime Contracts & Safe Data Boundaries.** The first section, *Static Types Versus Runtime Values*, tackles the most common TypeScript misconception: types disappear at runtime. The answer comes in the later sections, *Parse, Don't Validate* and *The Complete Runtime-Validated Data Boundary*. Pair a schema library with inferred types so the compile-time promise is backed by a runtime check wherever untrusted data enters.

## Part 2: Application architecture (Chapters 6–8)

**6. Component-Driven Architecture & Design Patterns.** *Finding Coherent Component Boundaries* and *Component Inputs, Outputs, and Public Contracts* treat a component as an interface, not a file. The chapter ends with a refactoring case study, *From Monolith to Resilient Architecture*, which tests the ideas on something messy.

**7. Reactivity & Rendering Mechanics.** React's rendering pipeline and Vue's reactivity model sit side by side. *State Snapshots, Batching, and Scheduling* explains why updates do not always appear immediately, and *Source State vs. Derived State* names one of the most common anti-patterns in front-end work: storing something you could compute. *Effects, Lifecycle Boundaries, and Feedback Loops* is a warning about the loops you build by accident.

**8. State Management, Routing & Form Architecture.** These three topics are often taught separately, but they are the same problem: where does state live, and who owns it? The chapter includes reducers and state machines for determinism, and the rule that *the URL is the single source of truth for navigable state*. If an app keeps both a local `sort` variable and `?sort=price` in the address without a clear hierarchy, the two will diverge.

## Part 3: Data and rendering (Chapters 9–11)

**9. Client-Server Communication, APIs & Cache Management.** HTTP foundations, caching, mutations, and error handling lead to *Optimistic Updates and Rollback Architecture*. The reasoning is practical: if success is likely over 99% of the time, waiting 800ms on a slow network feels sluggish, so the interface should reflect the change at once and roll back on failure. The skill is designing the rollback.

**10. Real-Time Communication, Offline Systems & Client Persistence.** *Choosing Push Over Poll*, service workers and the offline application shell, and finally *Concurrency, Conflicts, and Reconciliation*. The last section is the difficult one. An app that works offline has to decide what happens when two versions of the truth meet.

**11. Rendering Topologies: CSR, SSR, SSG & Beyond.** The chapter is framed by what I call the Rendering Cost Triangle: every rendering decision moves cost from one place to another.

{% include image.html url="/img/posts/2026-10-02-modern-front-end-engineering/cost-triangle.svg" description="The Web Rendering Cost Triangle: server and request cost, build and deployment cost, and client and device cost. Moving work away from one corner adds cost elsewhere" %}

SSG pays mostly at build time, SSR pays on every request, and CSR pays on the user's device; the diagram places each strategy near the corner where it concentrates its cost. The sections that follow, on incremental revalidation, hydration, streaming SSR, and hybrid topologies that go *beyond all-or-nothing hydration*, are variations on that trade. The chapter closes with *The Route-Specific Architectural Decision Matrix*, because one site can reasonably use different strategies for different routes.

## Part 4: Scale and responsibility (Chapters 12–14)

**12. Modern Build Systems, Development Tooling & Team Workflows.** The title includes *team workflows*, so this is not only a chapter about Vite. The sections cover native ESM and hot module replacement in development, bundler graph optimisation for production, fingerprinting and cache busting, source maps, and *Environment Boundaries: Build-Time vs. Runtime Configuration*. That last one draws a line between values fixed when the code is built and values read when it runs, a distinction that is easy to blur.

**13. Front-End Security, Authentication & Browser Isolation.** The first section treats the browser as a security runtime and begins with origins and the same-origin policy. CORS is "demystified", and cross-site scripting gets its own section on anatomy, defence, and trusted sinks. One comparison covers where to store authentication tokens.

{% include image.html url="/img/posts/2026-10-02-modern-front-end-engineering/token-storage.svg" description="Pattern A keeps bearer tokens in localStorage, where one XSS bug can read them. Pattern B uses a Backend-for-Frontend so the browser holds only an HttpOnly cookie" %}

The chapter describes the localStorage approach as the choice with catastrophic exposure: one XSS bug or compromised npm package can read the token and send it away. A Backend-for-Frontend avoids that, at the price of operating a server. The chapter ends with a security audit checklist.

**14. Scaling Front-End Architecture: Design Systems, Monorepos & Micro-Frontends.** The first section, *The Dimensions of Front-End Scale*, asks "scale in what way?": code, teams, or deployment. Micro-frontends get a section titled *Runtime Independence and Its Heavy Costs*, and the title reflects the view that they are a tool for organisations with hundreds of developers who need autonomous deployments, not a default.

## Part 5: Production engineering (Chapters 15–18)

**15. Core Web Vitals & Performance Engineering.** The first section is *Field vs. Lab and the 75th Percentile*, which says that performance is what real users experience, not what your laptop shows. The Core Web Vitals trio follows, with targets for loading speed, responsiveness, and visual stability. The chapter closes with large datasets, virtualisation, and memory leaks.

**16. Testing Strategies for Resilient Interfaces.** Testing is framed as risk management, not just "write tests". The chapter moves from pure logic to component tests built on accessible semantics, then async interfaces, boundary mocking, and race conditions, and finally end-to-end journeys in real browsers. The last section, *Test Architecture, Flakiness, and CI Resilience*, treats a test suite as a system that itself needs design.

**17. Continuous Delivery, Observability, and Maintenance.** *Delivery as an Architectural Discipline* sets the theme. Reproducible artifacts, release identity, progressive deployment, telemetry, and *Production Incident Response & Rollback Engineering* share one chapter because shipping and operating are connected.

**18. Front-End Architecture & Technical Decision-Making.** The finale is about judgment. It starts with *Architecture as the Management of Competing Constraints*, and moves through quality attributes, cohesion and coupling, and *Investigative Spikes & Empirical Evidence*. The section on Architectural Decision Records gives the reason to write decisions down: six months later, new engineers will wonder why the team chose a strange approach, and without context they may undo it. The chapter ends with reversibility and migration paths, because decisions are easier to make when you can afford to change them.

## Appendices and companions

Three appendices extend the main text. *The Front-End Architectural Rosetta Stone* compares vanilla JavaScript, React, and Vue by concept: components, inputs, outputs, local state, derived state, effects, refs, context, routing. Its repeated "translation principle" shows how the same architectural idea is spelled in each. A browser APIs reference and a production deployment checklist round out the set. Each chapter also has a lecture deck and a practical brief, such as an accessible listbox, an offline outbox, and an architecture decision record.

## The idea that runs through all eighteen

Three commitments show up in nearly every chapter: understand the platform, measure and verify, and make trade-offs explicit. A framework can change in two years. The question "what does the browser do with this, and what does it cost?" will not.

*Read the book, slides, and practical briefs at [polla.dev/frontend-book](https://polla.dev/frontend-book/).*
