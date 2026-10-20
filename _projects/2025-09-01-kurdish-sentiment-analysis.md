---
layout: project
title: "Central Kurdish (Sorani) Sentiment Analysis"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC)"
description: "Sentiment classification, explainable machine learning, and evaluation of Kurdish-language models."
date: 2025-09-01
category: ai
my-role: "Lead Researcher / AI Project Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-smile"
    name: "Sentiment Analysis"
  - fa: true
    icon: "fas fa-brain"
    name: "Transformers & XAI"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project introduces automated polarity classification and emotion mining for Kurdish social media texts using transformer models and explainable machine learning techniques to decode public discourse and digital opinions.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
