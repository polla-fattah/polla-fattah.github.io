---
layout: publication
title: "Your Publication Title Here"
name: "publication-id"  # Unique identifier for cross-referencing (lowercase, hyphens)
authors: ["Author1", "Author2", "Polla Fattah"]
# date: YYYY-MM-DD  # Replace with actual date when creating new publication
background: "/img/publication/journal.jpg"
type: "Conference Paper"  # or "Journal Article", "Report", etc.
publisher: "Publisher Name"
page: ""
citation: "Author1, Author2, Polla Fattah. 'Your Publication Title Here.' Publisher Name, YYYY."  # Replace YYYY with actual year
link: ""

# CROSS-REFERENCES - REMEMBER TO UPDATE THESE WHEN CHANGES OCCUR:
# 1. When adding a student author, add their student ID here
# 2. When this publication comes from a research project, add the project ID here
# 3. Update the corresponding student/research files with this publication ID
students: []  # Student IDs (lowercase, no spaces) - e.g., ["aveen", "bnar"]
research_projects: []  # Research project IDs - e.g., ["2023-02-10-autism-detection"]
abstract: |
  Your abstract text goes here. This should be a brief summary of the publication's content, methodology, and findings.
published: false
---

## Abstract

{{ page.abstract }}

## Citation

{{ page.citation }}

## Extra info

- Type: {{ page.type }}
{% if page.link != "" %} - Link: [ {{ page.publisher }} ]({{page.link}}){: target="_blank" }{% endif %}
