---
layout: project
title: "Dots-and-Boxes"
organisation: "University of Salahuddin-Erbil, Software Engineering"
date: 2002-03-01
finish-date: 2003
background: "/img/jobs/business.jpg" # business.jpg academy.jpg
category: game # business academy
myrole: "Developer"
source: ""
technologies:
  - fa: true
    icon: "fas fa-scroll"
    name: "Visual Basic"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organisation:** _{{page.organisation}}_
- **My Role:** _{{page.myrole}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source %}
- **Source**: [{{page.source}}]({{page.source}}){% endif %}

## Project Description

The generic description of the project.

Mar-2002 Design the game dots-and-box as course project
