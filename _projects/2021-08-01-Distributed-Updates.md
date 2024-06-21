---
layout: project
title: "Distributed Updates"
organization: "SmartGate"
description: "A small system to distribute software updates using command line"
date: 2021-08-01
background: "/img/projects/commandline.jpg"
category: Command line application # application, webapp, website,
my-role: "Developer"
source: ""
technologies:
  - fa: true
    icon: "fab fa-git-alt"
    name: "Git"
  - fa: true
    icon: "fas fas fa-terminal"
    name: "Bash Script"
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

This project is used internally in SmartGate company that can send updates to any of the locations that we wanted to update using command line
