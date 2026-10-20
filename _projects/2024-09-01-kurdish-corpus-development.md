---
layout: project
title: "Kurdish Corpus Development and NLP Preprocessing Tools"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC)"
description: "Corpus compilation, text normalization, tokenization, data cleaning, and reusable Kurdish NLP resources."
date: 2024-09-01
category: nlp
my-role: "Lead Researcher & Technical Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-database"
    name: "Corpora Management"
  - fa: true
    icon: "fas fa-cogs"
    name: "NLP Preprocessing"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This initiative compiles large-scale multi-dialectal Kurdish text corpora and creates open-source preprocessing toolkits, including Unicode normalizers, stemmers, tokenizers, and sentence splitters, serving as foundational infrastructure for Kurdish computational linguistics.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
