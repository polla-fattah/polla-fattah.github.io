---
layout: project
title: "web-based video management system"
organization: "7NetLayers"
description: "Develop a video management web based system for 7NetLayers company."
date: 2012-07-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: ""
technologies:
  - fa: true
    icon: "fas fas fa-terminal"
    name: "Bash Script"
  - fa: true
    icon: "fab fa-php"
    name: "PHP"
  - fa: true
    icon: "fab fa-html5"
    name: "HTML"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "CSS"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

Jul-2012 Develop a video management web based system for 7NetLayers company.
