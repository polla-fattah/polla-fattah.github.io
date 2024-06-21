---
layout: project
title: "Linux Administration"
organization: "7NetLayers"
description: "Install and admin multiple Linux based servers for 7NetLayers company."
date: 2012-03-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "IT Administrator"
source: ""
technologies:
  - fa: true
    icon: "fab fa-linux"
    name: "Linux"
  - fa: true
    icon: "fas fa-server"
    name: "Server"
  - fa: true
    icon: "fas fa-network-wired"
    name: "Networking"
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

Mar-2012 Install and admin multiple Linux based servers for 7NetLayers company.
