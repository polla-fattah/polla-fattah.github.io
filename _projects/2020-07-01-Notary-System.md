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

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

Supervise the Quality of Services of the Notary system of the KRG
