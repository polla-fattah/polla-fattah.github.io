---
layout: project
title: "Chat Application"
organization: "University of Salahaddin-Erbil, Software Engineering"
description: "Design and implement a chat application as final year project."
date: 2004-07-01
background: "/img/projects/chat.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: "https://github.com/polla-fattah/Chat-Application"
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
  - fa: true
    icon: "far fa-file-alt"
    name: "File based database"
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

This was the final year project. I was responsible for the design and implementation of the chat application using Java. It was a multi-threaded, I18n, and client/server chat application.
