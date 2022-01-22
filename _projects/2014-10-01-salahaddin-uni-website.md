---
layout: project
title: "Salahaddin University-Erbil's Website"
organization: "University of Salahaddin-Erbil"
description: "Design and implement Salahaddin University-Erbil website."
date: 2014-10-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer and development team manager."
source: "https://github.com/polla-fattah/Salahaddin-University-Web"
technologies:
  - fa: true
    icon: "fab fa-php"
    name: "PHP"
  - fa: true
    icon: "fab fa-html5"
    name: "HTML"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "CSS"
  - fa: true
    icon: "fas fa-database"
    name: "MySQL"
  - fa: true
    icon: "fas fa-server"
    name: "Apache Web Server"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

Design and implement Salahaddin University-Erbil's website. This website has capability to build personal pages for the staff, manage websites for different colleges and departments as well as publications.
