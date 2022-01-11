---
layout: project
title: "Library Managment System"
organisation: "University of Salahuddin-Erbil, Software Engineering"
date: 2002-06-01
background: "/img/projects/library.jpg"
category: application # application, webapp, website, game
myrole: "Development Team Leader"
source: ""
technologies:
  - fa: false
    icon: "C++"
    name: "C++"
  - fa: ture
    icon: "far fa-file-alt"
    name: "File based database"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organisation:** _{{page.organisation}}_
- **My Role:** _{{page.myrole}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_{% if page.source %}
- **Source**: [{{page.source}}]({{page.source}}){% endif %}

## Project Description

Create my first application for the university group project as a team leader. The system was a library managment system which was functioning under DOS commands. We have used using C++
