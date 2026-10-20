---
layout: project
title: "Kurdish Natural Language Understanding and Text Classification"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC)"
description: "Semantic understanding, document classification, and deep learning models for Kurdish text."
date: 2024-09-15
category: ai
my-role: "Lead Researcher / AI Project Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-project-diagram"
    name: "RoBERTa / NLU"
  - fa: true
    icon: "fas fa-tags"
    name: "Text Classification"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project explores deep learning contextual representations (e.g. Kurdish-adapted RoBERTa) to perform semantic understanding, multi-label text categorization, topic modeling, and named entity recognition across Kurdish textual resources.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
