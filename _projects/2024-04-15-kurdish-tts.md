---
layout: project
title: "Kurdish Text-to-Speech Synthesis (TTS)"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC)"
description: "Speech synthesis, Kurdish pronunciation resources, and natural-sounding voice generation."
date: 2024-04-15
category: ai
my-role: "Lead Researcher / AI Project Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-volume-up"
    name: "Acoustic Modeling"
  - fa: true
    icon: "fas fa-brain"
    name: "Deep Learning / Tacotron"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project develops neural speech synthesis systems specifically tuned to Kurdish phonological and prosodic characteristics, generating natural, expressive, and intelligible spoken audio across regional Kurdish dialects.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
