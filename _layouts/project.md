---
layout: default
---

<!-- Page Header -->
{% if page.background %}
<header class="masthead" style="background-image: url('{{ page.background | prepend: site.baseurl | replace: '//', '/' }}')">
  {% else %}
  <header class="masthead">
    {% endif %}
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="project-heading">
            <h1>{{ page.title }}</h1>
            {% if page.subtitle %}
            <h2 class="subheading">{{ page.subtitle }}</h2>
            {% endif %}
            <span class="meta">
              Completed at {{ page.date | date: '%B %d, %Y' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">

        {{ content }}

        <hr>

        <div class="clearfix">

          {% if page.previous.url %}
          <a class="btn btn-primary float-left" href="{{ page.previous.url | prepend: site.baseurl | replace: '//', '/' }}" data-toggle="tooltip" data-placement="top" title="{{ page.previous.title }}">&larr; Previous<span class="d-none d-md-inline">
            Project</span></a>
          {% endif %}
          {% if page.next.url %}
          <a class="btn btn-primary float-right" href="{{ page.next.url | prepend: site.baseurl | replace: '//', '/' }}" data-toggle="tooltip" data-placement="top" title="{{ page.next.title }}">Next<span class="d-none d-md-inline">
              Project</span> &rarr;</a>
          {% endif %}

        </div>

      </div>
    </div>
  </div>