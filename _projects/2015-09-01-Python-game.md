---
layout: project
title: "Python game"
organization: "University of Nottingham"
description: "Manage a team of developers at Nottingham to Implement a game using Python."
date: 2015-09-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer & Team Leader"
source: ""
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

Nov-2015 Manage a team of developers at Nottingham to Implement a game using Python.
