---
layout: project
title: "Web-based Interface for Linux Commands"
organization: "TU Berlin"
description: "Create a web-based interface for linux commands using GWT."
date: 2004-10-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: ""
technologies:
  - fa: true
    icon: "fas fas fa-terminal"
    name: "Bash Script"
  - fa: true
    icon: "fab fa-java"
    name: "Java"
  - fa: false
    icon: "GWT"
    name: "Google Web Toolkit"
  - fa: true
    icon: "fab fa-php"
    name: "PHP"
  - fa: true
    icon: "fab fa-html5"
    name: "HTML"
  - fa: true
    icon: "fab fa-css3-alt"
    name: "CSS"
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

This was a requirement for finishing my training in TU Berlin. I have created a web-based interface for linux commands using GWT. Through this web application admins could issue commands to the server and see the output.
