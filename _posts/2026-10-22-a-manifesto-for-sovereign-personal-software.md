---
layout: post
title: "A Manifesto for Sovereign Personal Software"
subtitle: "Four foundational principles, an intellectual lineage across ten computing traditions, and an evidence-led methodology for asking whether software leaves authority with the user"
excerpt: "ToDoz was built to test an idea in one domain. Here is the full philosophy and evaluation framework behind it: four foundational principles, ten intellectual lineages, five non-compensatory requirements, an index of well-behaved tools, and verifiable migration runbooks."
date: 2026-10-22 00:30:00 +0300
background: '/img/posts/2026-10-22-a-manifesto-for-sovereign-personal-software/banner.webp'
categories: ["Software Engineering", "AI", "Open Source"]
author: "Polla Fattah"
usemathjax: false
project_url: "https://sovereign.polla.dev/"
---

I built [ToDoz]({% post_url 2026-10-19-todoz-personal-software-in-the-age-of-ai-agents %}) deliberately to test a set of engineering convictions in a real application. While writing down the philosophy behind it, it became clear that the central problem has very little to do with task management alone.

It is about who holds effective authority over the software and records we depend on every day, and what happens to our work when a vendor, subscription, network service, or fashionable technology changes or disappears.

So I separated the general philosophy and its verification rules from ToDoz and published them as a standalone work: **[A Manifesto for Sovereign Personal Software](https://sovereign.polla.dev/).**

## From One Application to an Architecture-Neutral Framework

When I built ToDoz, I started with six product-level rules tailored to a fast, local task manager: sovereignty, locality, predictability, responsiveness, focused interoperability, and longevity.

Stepping back from a single application forced a cleaner distinction between **foundational philosophical principles** and **supporting engineering qualities**. A complex scientific tool or a parametric CAD system like FreeCAD or QGIS is not less sovereign because a heavy geometry rebuild takes longer than 100 milliseconds, or because it integrates many functions inside one workbench rather than splitting them into small UNIX-style programs. Similarly, deterministic execution is a vital engineering mechanism for ledgers and schedules, but the deeper principle is that consequential behavior remains transparent and governable by the user.

The manifesto therefore distills the philosophy into **four foundational principles**, in a deliberate conceptual order:

1. **Sovereignty: Authority belongs to the user.** Users retain practical, not merely contractual, control over their records, essential capabilities, cryptographic keys, and ability to leave or replace providers.
2. **Longevity: Information outlives software.** Records and intellectual work remain accessible, interpretable, and recoverable across three dimensions: *data longevity* (bytes and metadata), *functional longevity* (continuing workflows in independent tools), and *knowledge longevity* (documented schemas, units, and provenance).
3. **Locality: Independence is designed in.** Capabilities that can reasonably execute on user-controlled hardware do not depend on continuous remote permission. Where network services are inherent to the task, they are judged by *dependency proportionality and replaceability*.
4. **Transparency and Control: Consequential behavior remains governable.** Users can understand, inspect, authorize, and reverse or contest significant actions taken on their behalf, whether by deterministic code, synchronization engines, or statistical AI models.

The order expresses a relationship rather than a numerical ranking: **Sovereignty defines the goal; Longevity protects it across time; Locality provides a primary means of independence; Transparency and Control make authority meaningful in operation.**

> *Software should serve people without claiming permanent custody over their information, choices, or work.*

## What This Builds On: Ten Intellectual Traditions

None of these concerns began in a vacuum. Rather than claiming to invent user autonomy from scratch, the site includes a dedicated **[Intellectual Lineage](/lineage/)** section ([sovereign.polla.dev/lineage](https://sovereign.polla.dev/lineage/)) with ten in-depth dossiers examining how Sovereign Software builds on, and where it deliberately diverges from, four decades of prior movements:

1. **Free Software (1983–Present):** Shares the commitment to user freedom, while distinguishing *operational independence* (when portable data and independent tools suffice) from cases where an irreplaceable application binary makes open source essential for functional longevity.
2. **Digital Preservation & OAIS (1995–Present):** Adopts the standard that preserved information must remain *independently understandable*, extending it from static post-hoc archives to active software evaluation.
3. **Interoperability & the Right to Exit (2000s–Present):** Moves from regulatory policy to concrete empirical exit verification.
4. **IndieWeb (2010–Present):** Extends self-owned publishing principles beyond personal websites to scientific, engineering, and financial workspaces.
5. **MyData (2014–Present):** Shifts focus from institutional personal data held by banks and hospitals to the primary custody of authored intellectual work.
6. **Solid (2016–Present):** Evaluates practical outcomes rather than mandating a single RDF/Linked Data pod protocol.
7. **Design Justice (2016–Present):** Recognizes that "the user" is not monolithic in multi-user and institutional software, introducing explicit **perspective roles** (*Individual User*, *Project Contributor*, *Workspace Collaborator*, and *Institutional Custodian*) so accountable shared governance is not confused with vendor lock-in.
8. **Local-First Software (2019–Present):** Builds directly on Kleppmann et al.'s seven ideals, while remaining architecture-neutral beyond CRDTs and separating UI latency targets from core eligibility.
9. **Permacomputing (2020–Present):** Values computational thrifty resilience while accommodating heavy scientific, engineering, and media domains.
10. **AI Governance & NIST AI RMF (2021–Present):** Translates high-level AI trustworthiness principles into concrete boundaries against AI-induced custody traps and silent external dependencies.

## Evidence Before Any Numerical Score: How Software Is Evaluated

An early temptation in software evaluation is to assign percentage weights and compute a single score out of 100. The problem with weighted arithmetic is that it is compensatory: a fast, polished application could fail data export completely and still pass with a high numerical score.

The **[Methodology](https://sovereign.polla.dev/methodology/)** therefore rejects arbitrary weights and tier badges in favor of a falsifiable, **non-compensatory assessment**:

- **Five Domain Preservation Profiles:** Before testing, an assessment declares its baseline domain profile (`vcs_core`, `knowledge_notes`, `cad_engineering`, `finance_tasks`, or `research_bibliographic`) so that what counts as "essential records", "essential capabilities", and "acceptable loss on exit" is fixed up front.
- **Five Fundamental Eligibility Requirements (`E1–E5`):** Independent access to essential records (`E1`), practicable exit and migration (`E2`), independent interpretation and recovery after provider withdrawal (`E3`), continuing authority and custody over already-created work without revocable permission (`E4`), and governability of consequential actions (`E5`). A verified failure on any of these five requirements cannot be offset by strengths elsewhere.
- **Seven Engineering Verification Procedures (`T1–T7`) and a Six-Stage Lab Protocol:** Hands-on tests covering ownership and exit (`T1`), clean-machine backup and restoration (`T2`), isolated network-cutout simulation (`T3`), operational transparency (`T4`), security and custody boundaries (`T5`), interoperability and maintainability (`T6`), and human experience (`T7` as supporting quality).
- **Deterministic Precedence:** From the recorded evidence and confidence levels, the framework computes one of five qualified determinations: *Fails a fundamental requirement*, *Insufficient evidence*, *Does not meet the proposed core standard*, *Partially aligned*, or *Meets the proposed core requirements*.

## What Is on the Site

- **[The Manifesto](https://sovereign.polla.dev/)**, along with a clean **[Reading & Print Edition](https://sovereign.polla.dev/read/)**, a downloadable Markdown file (`sovereign-software-manifesto.md`), and a self-hosted **[Presentation Deck](https://sovereign.polla.dev/slides/)**.
- **[The Intellectual Lineage](https://sovereign.polla.dev/lineage/)**, with ten detailed movement dossiers ordered chronologically from 1983 to the present.
- **[The Evaluation Methodology](https://sovereign.polla.dev/methodology/)** (`sovereign-software-methodology.md`), specifying the domain profiles, decision thresholds, six-stage laboratory protocol, two-assessor reconciliation rules, and worked examples.
- **[The Sovereign Index](https://sovereign.polla.dev/directory/)**, cataloging well-known reference tools across six disciplines—such as **Git**, **Jujutsu**, and **SQLite** in core infrastructure; **Obsidian**, **Logseq**, **Org-mode**, and **Typst** in knowledge work; **Beancount**, **hledger**, **KeePassXC**, and **Pass** in finance and custody; **Zotero**, **Paperless-ngx**, and **calibre** in research; **KiCad**, **FreeCAD**, and **OpenSCAD** in engineering; and **Syncthing**, **restic**, **BorgBackup**, **NixOS**, and **GNU Guix** in systems and recovery—each with its storage substrate, extraction command, and empirical verification plan.
- **[Escape Hatches](https://sovereign.polla.dev/escape-hatches/)**, providing four-stage migration runbooks (*Extract &rarr; Audit Completeness &rarr; Normalize into a Durable Substrate &rarr; Cut Over & Freeze*) for moving work out of cloud silos across all six domains, with explicit caveats on what metadata or workflow state is lost during migration.

## The Site Follows Its Own Rules

A site arguing for software independence should practice what it preaches. It is built as a static Hugo site that makes **zero third-party network requests**: all fonts and stylesheets are self-hosted, there are no analytics scripts, cookies, or external embeds, and JavaScript runs only on the Sovereign Index pages to filter entries and compute determinations directly in the browser. Automated tests verify cross-file consistency, run the methodology's worked examples through the evaluation engine, and scan the generated HTML to guarantee that no external requests slip in.

## Final Thoughts

AI is making software faster to produce, while cloud platforms are making user custody easier to surrender. That makes the question of authority more urgent, not less:

**When the software, vendor, network, or fashionable technology changes, does the person still retain meaningful control over their work?**

---

*Sovereign Personal Software is an open manifesto and evaluation framework, released under CC BY 4.0.*

[Read the Manifesto](https://sovereign.polla.dev/) · [Methodology](https://sovereign.polla.dev/methodology/) · [Lineage](https://sovereign.polla.dev/lineage/) · [Sovereign Index](https://sovereign.polla.dev/directory/) · [Escape Hatches](https://sovereign.polla.dev/escape-hatches/) · [Slides](https://sovereign.polla.dev/slides/) · [Source Code](https://github.com/polla-fattah/sovereign-software)
