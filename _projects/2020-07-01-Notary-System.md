---
layout: project
title: "Notary System"
organization: "Ministry of Justice, Notary Offices"
description: "Supervise the Quality of Services of the Notary system of the KRG"
date: 2020-07-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Software Consultant"
source: ""
technologies:
  - fa: true
    icon: "fab fa-git-alt"
    name: "Git"
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

Supervise the Quality of Services of the Notary system of the KRG
