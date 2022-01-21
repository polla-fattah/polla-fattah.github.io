---
layout: project
title: "Library Management System"
organization: "University of Salahaddin-Erbil, Software Engineering"
description: "Creating Library Management System using C++."
date: 2002-06-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website, game
my-role: "Development Team Leader"
source: "https://github.com/polla-fattah/Library"
technologies:
  - fa: false
    icon: "C++"
    name: "C++"
  - fa: true
    icon: "far fa-file-alt"
    name: "File based database"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

This application was a library management system under DOS Operating system. I developed this application using C++ language. This was a project for my first semester at the University of Salahaddin-Erbil, Software Engineering. I have created this project with a team of students. I was their team leader and main coding developer.
