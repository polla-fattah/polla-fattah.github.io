---
layout: project
title: "Personal Search Engine"
organization: "University of Salahaddin-Erbil, Software Engineering"
description: "Creating Personal Search Engine using Java."
date: 2003-12-01
background: "/img/projects/search.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: "https://github.com/polla-fattah/SearchEngine"
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
  - fa: true
    icon: "far fa-file-alt"
    name: "File based database"
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

This project was created as part of requirements to pass the subject of Advanced Java programming in my final year at the BSc study. In this application we have demonstrated multiple programming capabilities such as Web scrapping and content traction from web pages and simple page ranking.
