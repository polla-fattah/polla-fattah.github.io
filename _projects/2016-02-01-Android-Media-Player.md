---
layout: project
title: "Android Media Player"
organization: "University of Nottingham"
description: "Create a media player for Android using Java."
date: 2016-02-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website,
my-role: "Developer"
source: "https://github.com/polla-fattah/Simple-Media-Player"
technologies:
  - fa: true
    icon: "fab fa-java"
    name: "Java"
  - fa: true
    icon: "fab fa-android"
    name: "Android Framework"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source != "" %}
- **Source**: [{{page.source}}]({{page.source}}){:target="{{page.title}}"}{% endif %}

## Project Description

Create a media player for Android using Java.
