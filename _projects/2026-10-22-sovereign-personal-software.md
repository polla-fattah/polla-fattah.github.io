---
layout: project
title: "Sovereign Personal Software"
organization: "Personal"
description: "An open manifesto and evidence-led evaluation framework for software that remains under human authority, with ten intellectual lineage dossiers, an index of reference tools, and verifiable cloud-exit runbooks."
date: 2026-10-22 00:30:00 +0300
background: "/img/business/projects/sovereign-personal-software.webp"
category: website # application, webapp, website,
my-role: "Author / Designer / Developer"
source: "https://github.com/polla-fattah/sovereign-software"
technologies:
  - fa: true
    icon: "fas fa-globe"
    name: "Hugo"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "Tailwind CSS"
  - fa: true
    icon: "fab fa-js"
    name: "JavaScript"
  - fa: true
    icon: "fab fa-github"
    name: "GitHub Pages"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Date**: _{{page.date | date: '%B-%Y'}}_
- **Website**: [sovereign.polla.dev](https://sovereign.polla.dev/){:target="_blank"}
- **Source**: [{{page.source}}]({{page.source}}){:target="_blank"}

## Project Description

{{ page.description }}

The manifesto sets out four foundational principles—**Sovereignty**, **Longevity**, **Locality**, and **Transparency and Control**—and pairs them with an unscored, evidence-led evaluation methodology built around five domain preservation profiles, five non-compensatory eligibility requirements (`E1–E5`), and a six-stage laboratory verification protocol (`T1–T7`).

The site publishes the full manifesto with a reading/print edition, downloadable Markdown editions, and a self-hosted Marp presentation deck; ten chronological intellectual-lineage dossiers (from Free Software and OAIS digital preservation to Local-First computing and AI governance); the Sovereign Index of 39 reference tools across six disciplines with their storage substrates, extraction commands, and verification plans; and four-stage Escape Hatches migration runbooks for leaving cloud silos safely.

The site follows its own rules: it is a static Hugo site that loads nothing from third parties, with self-hosted fonts and styles, no trackers or cookies, and JavaScript on only the Index pages. The framework generalizes and refines the ideas first explored in [ToDoz]({% post_url 2026-10-19-todoz-personal-software-in-the-age-of-ai-agents %}). See the companion blog post [A Manifesto for Sovereign Personal Software]({% post_url 2026-10-22-a-manifesto-for-sovereign-personal-software %}).

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
