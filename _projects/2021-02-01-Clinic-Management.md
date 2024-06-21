---
layout: project
title: "Clinic Management System"
organization: "Private Healthcare Provider"
description: "Manage patient appointments, medical services profiles, and patient information with ease."
date: 2021-02-01
background: "/img/projects/clinic1.png"
category: application
my-role: "Lead Developer"
technologies:
  - fa: true
    icon: "fab fa-bootstrap"
    name: "Bootstrap"
  - fa: true
    icon: "fab fa-js"
    name: "JavaScript"
  - fa: true
    icon: "fab fa-vuejs"
    name: "VueJs"
  - fa: true
    icon: "fas fa-database"
    name: "Firebase/FireStore"
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

The Clinic Management System is a web-based application designed to help healthcare providers manage patient appointments, medical services profiles, and patient information with ease. The system includes the following features:

### Search

Users can search for medical services profiles by type of service and location using an appealing interactive interface.

### Profiles

All medical services have profiles where they can provide information about their services, specialties, background, location, and more. Doctors can also have an appointments section where patients can request appointments online.

### Patient Management

Doctors and their assistants have access to the patient management system, which includes:

- Adding patients with the details that the doctor wants
- Adding visits for the patients
- Printing prescriptions for the patients
- Managing appointments of the patients
- Searching for available patients
- The application suggests medication based on the patients' age and symptoms.

![Clinic Management System Dashboard](/img/projects/clinic2.png){:class="img-fluid"}

The image above shows the dashboard of the Clinic Management System, where healthcare providers can view and manage patient appointments, medical services profiles, and patient information.


## Technologies Used

The Clinic Management System was built using the following technologies:

{% for item in page.technologies %}
- {% if item.fa %}<i class="{{ item.icon }}"></i>{% endif %} {{ item.name }}
{% endfor %}

