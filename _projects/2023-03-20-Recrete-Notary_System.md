---
layout: project
title: "Notary System 2.0"
organization: "Ministry of Justice, Notary Offices"
description: "Recreate Notary System from scratch using Laravel, Vue.js, and PostgreSQL."
date: 2023-03-20
background: "/img/projects/notary-system-2.jpg"
category: webapp
my-role: "Project Leader"
technologies:
  - fa: true
    icon: "fab fa-laravel"
    name: "Laravel"
  - fa: true
    icon: "fab fa-vuejs"
    name: "Vue.js"
  - fa: true
    icon: "fas fa-database"
    name: "PostgreSQL"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_

## Project Description

Notary System 2.0 is a web-based application that allows the Ministry of Justice and Notary Offices to supervise the quality of services provided by the Notary System in the Kurdistan Region of Iraq. The system is built using modern and standard technologies, including Laravel for the backend, Vue.js for the frontend, and PostgreSQL as the database management system. The application includes the following features:

### User Management

The system manages different types of users, including administrators, notaries, and clients. Each user has a specific set of permissions and functionalities, depending on their role.

### Document Management

Notaries can create, edit, and manage different types of documents, including contracts, deeds, powers of attorney, and other legal documents.

### Appointment Management

Clients can request appointments with notaries using the application. Notaries can manage their schedules and appointments through the application.

### Quality Control

The Ministry of Justice and Notary Offices can supervise the quality of services provided by the Notary System using the application. They can review and approve or reject different types of documents and appointments.

### Reporting

The application generates different types of reports, including financial reports, appointment reports, and quality control reports. These reports help the Ministry of Justice and Notary Offices to monitor and evaluate the performance of the Notary System.

## Technologies Used

The Notary System 2.0 was built using the following modern and standard technologies:

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}
