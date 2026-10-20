---
layout: project
title: "Kurdish Automatic Text Summarization"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC)"
description: "Automatic summarization of Kurdish documents using transformer-based language models, including BERT-based approaches."
date: 2024-09-02
category: ai
my-role: "Lead Researcher / AI Project Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-brain"
    name: "Transformers / BERT"
  - fa: true
    icon: "fas fa-file-alt"
    name: "Summarization Models"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project investigates extractive and abstractive summarization techniques using Kurdish-adapted transformer architectures, automating document synthesis and news digest generation.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
