---
layout: project
title: "Personal Page"
organization: "Personal"
description: "This webpage"
date: 2022-01-15
background: "/img/projects/personal.png"
category: application # application, webapp, website,
my-role: "Supervisor"
source: "https://github.com/polla-fattah/polla-fattah.github.io"
technologies:
  - fa: true
    icon: "fas fa-vial"
    name: "Jekyll"
  - fa: true
    icon: "fab fa-html5"
    name: "HTML5"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "CSS3"
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

This was a new year resolution as I wanted to do in the new year something different :)
