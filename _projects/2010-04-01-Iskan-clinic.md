---
layout: project
title: "Iskan Clinic"
organisation: "University of Salahuddin-Erbil, Software Engineering"
date: 2010-04-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
myrole: "Developer & Team Leader"
source: ""
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
  - fa: ture
    icon: "far fa-file-alt"
    name: "File based database"
  - fa: ture
    icon: "fas fa-project-diagram"
    name: "Netwrorking"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organisation:** _{{page.organisation}}_
- **My Role:** _{{page.myrole}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source %}
- **Source**: [{{page.source}}]({{page.source}}){% endif %}

## Project Description

Apr-2010 Design a web based patient record database for Iskan clinic.
