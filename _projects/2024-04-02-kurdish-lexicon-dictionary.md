---
layout: project
title: "Collaborative Kurdish Lexicon, Dictionary and Terminology Management"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC) & Kurdish Academy"
description: "Collaborative dictionary development, lexical verification, expert contributions, and terminology management."
date: 2024-04-02
category: nlp
my-role: "Lead Researcher & Technical Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-database"
    name: "PostgreSQL"
  - fa: true
    icon: "fas fa-book"
    name: "Lexicography / NLP"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

A scalable digital infrastructure enabling collaborative compilation, peer verification, multi-dialect mapping, and standardized terminology management in Kurdish, developed in partnership with the Kurdish Academy.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
