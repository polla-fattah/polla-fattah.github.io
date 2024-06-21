---
layout: project
title: "Dots-and-Boxes"
organization: "University of Salahaddin-Erbil, Software Engineering"
description: "Creating Dots-and-Boxes Game using Visual Basic."
date: 2002-03-01
finish-date: 2003
background: "/img/jobs/business.jpg" # business.jpg academy.jpg
category: game # application, webapp, website, game
my-role: "Developer"
source: "https://github.com/polla-fattah/Dot-and-Box-The-Game"
technologies:
  - fa: true
    icon: "fas fa-scroll"
    name: "Visual Basic"
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

The generic description of the project.

Mar-2002 Design the game dots-and-box as course project
