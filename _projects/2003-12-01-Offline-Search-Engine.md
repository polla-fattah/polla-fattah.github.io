---
layout: project
title: "Offline Search Engine"
organization: "University of Salahuddin-Erbil, Software Engineering"
date: 2002-06-01
background: "/img/projects/search.jpg"
category: application # application, webapp, website,
myrole: "Developer"
source: ""
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
  - fa: ture
    icon: "far fa-file-alt"
    name: "File based database"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.myrole}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source %}
- **Source**: [{{page.source}}]({{page.source}}){% endif %}

## Project Description

Create a personal Search Engine using java.
