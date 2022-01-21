---
layout: project
title: "Local Network and Web-based Services"
organization: "University of Salahaddin-Erbil, Electrical Engineering"
description: "Design and manage an internal network infrastructure and website for Electrical Engineering Dept. at Salahaddin University-Erbil."
date: 2011-07-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer & IT"
source: ""
technologies:
  - fa: true
    icon: "fas fas fa-terminal"
    name: "Bash Script"
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

Design and manage an internal network infrastructure and websites for Electrical Engineering Dept. at Salahaddin University-Erbil. The websites were designed so that the lecturers and students could easily access the information about the courses, share information and having QAs.
