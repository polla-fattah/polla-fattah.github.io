---
layout: project
title: "Sovereign Personal Software"
organization: "Personal"
description: "An open manifesto for software that people own, with an interactive seven-gate evaluator, an index of example tools, and recipes for leaving cloud services."
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

The manifesto sets out six principles (sovereignty, locality, predictability, responsiveness, focused interoperability and longevity) and seven engineering tests for judging software against them. The site publishes the full text with a reading and print edition and a downloadable Markdown file, an index of example tools with the data format each one uses, an interactive evaluator that scores any tool against the seven gates, and short migration recipes for moving data out of cloud services.

The site follows its own rules: it is a static Hugo site that loads nothing from third parties, with self-hosted fonts and styles, no trackers or cookies, and JavaScript on only two pages. The manifesto generalizes the principles behind [ToDoz]({% post_url 2026-10-19-todoz-personal-software-in-the-age-of-ai-agents %}). See the blog post [A Manifesto for Sovereign Personal Software]({% post_url 2026-10-22-a-manifesto-for-sovereign-personal-software %}).

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
