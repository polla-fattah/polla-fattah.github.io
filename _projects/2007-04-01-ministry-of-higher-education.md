---
layout: project
title: "Ministry of Higher Education's Website"
organization: "Ministry of Higher Education, KRG"
description: "Design and implement a website for Ministry of Higher Education"
date: 2007-04-01
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

Apr-2007 Design and implement the website of Ministry of Higher Education of KRG. This was build using LAMP stack for the server side and HTML+CSS+JavaScript for the client side.
