---
layout: project
title: "University Webapp"
organization: "Tishk International University"
description: " Supervise a project for university staff management system"
date: 2018-05-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Supervisor"
source: ""
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
  - fa: true
    icon: "far fa-file-alt"
    name: "File based database"
  - fa: true
    icon: "fas fa-project-diagram"
    name: "Networking"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

Supervise a project for university staff management system
