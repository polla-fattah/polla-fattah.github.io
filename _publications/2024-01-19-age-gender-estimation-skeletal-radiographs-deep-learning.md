---
layout: publication
title: "Age and Gender Estimation from Skeletal Radiographs Using Deep Learning"
name: "age-gender-estimation-skeletal-radiographs-deep-learning"
authors: ["Alaa", "Polla Fattah"]
date: 2024-01-19
background: "/img/publication/journal.jpg"
type: "Journal Article"
publisher: "Medical Image Analysis"
page: ""
citation: "Alaa, Polla Fattah. 'Age and Gender Estimation from Skeletal Radiographs Using Deep Learning.' Medical Image Analysis, 2024."
link: ""

# CROSS-REFERENCES - REMEMBER TO UPDATE THESE WHEN CHANGES OCCUR:
# 1. When adding a student author, add their student ID here
# 2. When this publication comes from a research project, add the project ID here
# 3. Update the corresponding student/research files with this publication ID
students: ["alaa"]  # Student IDs (lowercase, no spaces)
research_projects: ["2023-10-08-general-medical"]  # Research project IDs
abstract: |
  This research investigates the application of deep learning techniques for automatic age and gender estimation from skeletal radiographs. The study develops convolutional neural network models that can accurately predict demographic information from medical imaging data, contributing to automated medical image analysis and forensic applications.
---

## Abstract

{{ page.abstract }}

## Citation

{{ page.citation }}

## Extra info

- Type: {{ page.type }}
{% if page.link != "" %} - Link: [ {{ page.publisher }} ]({{page.link}}){: target="_blank" }{% endif %}
