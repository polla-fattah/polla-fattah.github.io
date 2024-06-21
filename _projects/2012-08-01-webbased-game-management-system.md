---
layout: project
title: "web-based game management system"
organization: "7NetLayers"
description: "Develop a game management web based system for 7NetLayers company."
date: 2012-08-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: "https://github.com/polla-fattah/Game-Portal"
technologies:
  - fa: true
    icon: "fab fa-php"
    name: "PHP"
  - fa: true
    icon: "fab fa-js-square"
    name: "JavaScript"
  - fa: true
    icon: "far fa-file-alt"
    name: "Text File"
  - fa: true
    icon: "fas fas fa-terminal"
    name: "Bash Script"
  - fa: true
    icon: "fab fa-html5"
    name: "HTML"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "CSS"
  - fa: true
    icon: "fas fa-network-wired"
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

Develop a video management web based system for 7NetLayers company.
