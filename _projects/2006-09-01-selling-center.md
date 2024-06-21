---
layout: project
title: "Selling Point"
organization: "Korek Telecom"
description: "Create web-based selling centre application for Korek Telecom."
date: 2006-09-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: ""
technologies:
  - fa: true
    icon: "fab fa-php"
    name: "PHP"
  - fa: true
    icon: "fab fa-html5"
    name: "HTML"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "CSS"
  - fa: true
    icon: "fas fa-database"
    name: "MySQL"
  - fa: true
    icon: "fas fa-server"
    name: "Apache Web Server"
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

This web- based database system was designed specifically for selling SIM cards at sell points of Korek Telecom. This system was developed using PHP and MySQL.
