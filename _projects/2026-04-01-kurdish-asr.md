---
layout: project
title: "Kurdish Automatic Speech Recognition (ASR)"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC)"
description: "Kurdish speech datasets, speech-to-text models, and dialect-aware recognition using deep neural network architectures."
date: 2026-04-01
category: ai
my-role: "Lead Researcher / AI Project Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-microphone"
    name: "Speech Recognition / Whisper"
  - fa: true
    icon: "fas fa-wave-square"
    name: "Acoustic Modeling"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project creates comprehensive speech acoustic benchmarks and fine-tunes transformer speech-to-text architectures (e.g. Whisper) to accurately transcribe conversational and formal Kurdish across Sorani and Kurmanji dialects.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
