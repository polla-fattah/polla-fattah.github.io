---
layout: project
title: "Ministry of Culture's Website"
organization: "Ministry of Culture, KRG"
description: "Design and implement a website for Ministry of Culture"
date: 2007-01-01
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

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

Design and implement the website of Ministry of Culture in Kurdistan Region Iraq. This was build using LAMP stack for the server side and HTML+CSS+JavaScript for the client side.
