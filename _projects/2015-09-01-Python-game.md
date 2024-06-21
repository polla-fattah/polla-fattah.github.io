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
<style>
  ul p {
  margin-bottom: 2px;
  margin-top: 2px;
}
</style>
## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** 
  {% for item in page.technologies %}
    - {{ item.name }}
  {% endfor %}
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}

## Project Description

Manage a team of developers at Nottingham to Implement a variation of flappy bird game using Python.
