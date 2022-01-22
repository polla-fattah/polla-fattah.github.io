---
layout: project
title: "Python Game"
organization: "University of Nottingham"
description: "Manage a team of developers at Nottingham to Implement a game using Python."
date: 2015-09-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer & Team Leader"
source: "https://github.com/polla-fattah/Flappy-Bird-Variation"
technologies:
  - fa: true
    icon: "fab fa-python"
    name: "Python"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

Manage a team of developers at Nottingham to Implement a variation of flappy bird game using Python.
