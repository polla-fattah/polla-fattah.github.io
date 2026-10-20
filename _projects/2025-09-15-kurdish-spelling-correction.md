---
layout: project
title: "Kurdish Spelling Correction and Orthographic Standardization"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC) & Kurdish Academy"
description: "Spelling error detection, automatic correction, orthographic consistency, and normalization across Kurdish texts."
date: 2025-09-15
category: nlp
my-role: "Lead Researcher & Technical Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-spell-check"
    name: "Spell Checking"
  - fa: true
    icon: "fas fa-check-double"
    name: "Orthographic Normalization"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project develops statistical and neural spelling correction tools addressing dialectal ambiguities, zero-width non-joiners (ZWNJ), and script inconsistencies, promoting standardized Kurdish orthography in publishing and digital applications.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
