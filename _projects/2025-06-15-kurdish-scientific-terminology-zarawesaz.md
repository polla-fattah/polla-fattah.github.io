---
layout: project
title: "Kurdish Scientific Terminology Standardization (Zarawesaz)"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC) & Kurdish Academy"
description: "Scientific terminology development, expert voting and consensus, lexical standardization, and convergence between Kurdish dialects."
date: 2025-06-15
category: nlp
my-role: "Lead Researcher & Technical Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-calculator"
    name: "Fuzzy Logic / Consensus"
  - fa: true
    icon: "fas fa-network-wired"
    name: "Standardization Platforms"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

Zarawesaz establishes computational decision support frameworks using fuzzy logic algorithms to standardize newly coined scientific and technological terms, harmonizing dialects through expert consensus and linguistic validation.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
