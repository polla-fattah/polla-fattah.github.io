---
layout: project
title: "User Classification System"
organization: "University of Nottingham"
description: "Classifying users of public good simulation for researchers at the economic school using own developed algorithm."
date: 2014-08-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Data Analysis"
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

Classifying users of public good simulation for researchers at the economic school using own developed algorithm.