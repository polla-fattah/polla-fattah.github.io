---
layout: project
title: "Low-Resource Neural Machine Translation (Kurdish–English)"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC) & SUE"
description: "Neural machine translation between Kurdish and English using limited parallel corpora and tokenization-free architectures."
date: 2025-06-01
category: ai
my-role: "Lead Researcher & Project Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-language"
    name: "ByT5 / Transformers"
  - fa: true
    icon: "fas fa-exchange-alt"
    name: "Neural Machine Translation"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project introduces tokenization-free and byte-level transfer learning models (ByT5) for bidirectional translation between Kurdish and English, bypassing subword segmentation vulnerabilities inherent in low-resource morphologically rich languages.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
