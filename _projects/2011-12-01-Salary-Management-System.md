---
layout: project
title: "HR Management System"
organization: "University of Salahaddin-Erbil, College Engineering"
description: "Human Resource Management Database for Engineering College at Salahaddin University."
date: 2011-12-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Database and System Designer"
source: ""
technologies:
  - fa: true
    icon: "fab fa-php"
    name: "PHP"
  - fa: true
    icon: "fas fa-server"
    name: "Server"
  - fa: true
    icon: "fas fa-code"
    name: "HTML Code"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "CSS"
  - fa: true
    icon: "fas fa-project-diagram"
    name: "ER Diagrams"
  - fa: false
    icon: "GWT"
    name: "Google Web Toolkit"
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

A simplified version of HR of the College of Engineering, I have used PHP as backend and GWT as frontend.
