---
layout: project
title: "Online Delivery System"
organization: "For FRM Delivery Services"
description: "Manage a development team Create an application for facilitating online deliveries."
date: 2019-11-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer & and development team manager"
source: "https://github.com/polla-fattah/FRM_Delivery"
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

Manage a development team to Create an application for facilitating online deliveries.
