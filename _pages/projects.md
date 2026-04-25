---
layout: page
title: Projects
permalink: /projects/
description: Selected research and engineering projects in NLP and machine learning.
nav: true
nav_order: 3
---

<div class="projects-list">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    {% include projects_row.liquid %}
  {% endfor %}
</div>
