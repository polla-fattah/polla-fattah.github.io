---
layout: project
title: "FIshtank Simulation"
organization: "University of Nottingham"
description: "Leading a team of developers to create a simulation for fish in a tank using openGL."
date: 2016-05-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer & Team Leader"
source: "https://github.com/polla-fattah/Fish-Tank-OpenGL"
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

May-2016 Leading a team of developers to create a simulation for fish in a tank using openGL.
