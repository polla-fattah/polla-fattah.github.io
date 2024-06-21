---
layout: project
title: "Photo Gallery"
organization: "Free Lancer"
description: "Manage images with their information in a stand-alone and portable application."
date: 2022-07-01
background: "/img/projects/image-manager.jpg"
category: application
my-role: "Sole Developer"
technologies:
  - fa: false
    icon: "flutter"
    name: "Flutter"
---

## Highlights

- **Project Title:** _{{page.title}}_
- **Organization:** _{{page.organization}}_
- **My Role:** _{{page.my-role}}_
- **Tools:** _{% for item in page.technologies %}{{ item.name }}&nbsp;&middot;&nbsp;{% endfor %}_
- **Completed Date**: _{{page.date  | date: '%B-%Y'}}_

## Project Description

The Image Manager is a stand-alone and portable application that allows users to manage images with their information. The application includes the following features:

### Language Support

The application supports both Kurdish and English languages, making it accessible to a wider range of users.

### Image Gallery

The system manages images in a gallery-like interface with the following properties:

- Adding Images with their Information: Users can add images with their information, including title, description, and tags.
- Editing Image Information: Users can edit the information associated with an image, including its title, description, and tags.
- Deleting Images: Users can delete images they no longer need.

### Batch Image Upload

The application is able to upload a batch of images at once, making it more efficient for users to manage their images.

### Image Search

Images can be searched by their given information, including title, description, and tags. This feature makes it easier for users to find specific images among their collection.

### Image Albums/Tags

Images can be collected into albums or tagged with keywords, making it easier for users to organize their images and find related images.

### Image Slideshow

A selected set of images can be displayed as a slideshow, allowing users to view their images in a dynamic and engaging way.

### Full Screen Presentation

The same slideshow images can be popped up to create a full-screen presentation in another window, which can be displayed on another screen for presentations or showcases.

### Export to PDF

The application is able to export a selection of images as a PDF, allowing users to share their images with others in a professional and organized way.

Overall, the Image Manager application provides a powerful and efficient way for users to manage their images with ease and flexibility.

![GalleryApp](/img/projects/gallery.png){:class="img-fluid"}