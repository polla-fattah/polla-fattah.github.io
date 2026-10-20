---
layout: project
title: "Kurdish Handwritten and Printed Text Recognition (OCR)"
organization: "UKH Artificial Intelligence and Innovation Centre (AIIC) & Kurdish Academy"
description: "Handwritten Sorani recognition, printed text OCR, image preprocessing, line segmentation, and deep learning models such as TrOCR."
date: 2024-04-01
category: ai
my-role: "Lead Researcher / AI Project Director"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
  - fa: true
    icon: "fas fa-brain"
    name: "PyTorch / TrOCR"
  - fa: true
    icon: "fas fa-eye"
    name: "Computer Vision / OCR"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Commencement Date**: _{{page.date | date: '%B-%Y'}}_

## Project Description

{{ page.description }}

This project develops state-of-the-art optical character recognition pipelines specifically designed for both printed Kurdish texts and handwritten Central Kurdish (Sorani) script. It incorporates advanced preprocessing, morphological feature extraction, line and character segmentation, and transformer-based visual language models.

## Technologies Used

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
