---
layout: project
title: "AI playing Dots-and Boxes Game"
organization: "University of Nottingham"
description: " Leading a team for creating an AI method for playing Dots-and-Boxes game."
date: 2016-08-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: "https://github.com/polla-fattah/DotsBoxs"
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
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

Leading a team for creating a framework to compare different A methods' performance in playing Dots-and-Boxes game
