---
layout: page
permalink: /security/
title: Security
description: Security research on AI agent tooling.
nav: true
nav_order: 7
---

<div class="about-focus">
  <span class="focus-chip">Coding agents</span>
  <span class="focus-chip">Agent runtimes</span>
  <span class="focus-chip">Guardrails &amp; permissions</span>
  <span class="focus-chip">Coordinated disclosure</span>
</div>

<p class="about-lead">
I'm an independent security researcher working on the security of <strong>AI agent tooling</strong>: coding agents, agent runtimes, and the guardrail and permission layers that decide what an autonomous agent may do without a human confirming it.
</p>

### Where the bugs live

Most of what I find is one class of mistake: the gap between what a guardrail's matcher believes a path or command is and what the OS or shell actually executes. Path normalization, option-attached arguments, alternate data streams, cross-origin requests to default-on local servers.

### How I work

<div class="about-hobbies">
  <div class="hobby-tile">
    <span class="hobby-tile__icon"><i class="fa-solid fa-box"></i></span>
    <span class="hobby-tile__text">Reproduce in a clean, isolated container before claiming anything.</span>
  </div>
  <div class="hobby-tile">
    <span class="hobby-tile__icon"><i class="fa-solid fa-lock"></i></span>
    <span class="hobby-tile__text">Report privately to maintainers through coordinated disclosure, with a patch and regression tests where I can.</span>
  </div>
  <div class="hobby-tile">
    <span class="hobby-tile__icon"><i class="fa-solid fa-hourglass-half"></i></span>
    <span class="hobby-tile__text">No public write-ups or PRs until the advisory is published.</span>
  </div>
</div>

### Disclosures

{::nomarkdown}
{% assign advisories = site.data.advisories %}
{% if advisories and advisories.size > 0 %}

<div class="about-highlights">
{% for adv in advisories %}
<a class="highlight-chip" href="{{ adv.url }}">
<span class="highlight-chip__icon"><i class="fa-solid fa-shield-halved"></i></span>
<span class="highlight-chip__body">
<span class="highlight-chip__title">{{ adv.id }}: {{ adv.summary }}</span>
<span class="highlight-chip__sub">{{ adv.project }}{% if adv.severity %} · {{ adv.severity }}{% endif %}</span>
</span>
<span class="highlight-chip__arrow"><i class="fa-solid fa-arrow-right"></i></span>
</a>
{% endfor %}
</div>
{% else %}
<div class="about-callout">
Coordinated advisories are in progress. Published ones will be listed here.
</div>
{% endif %}
{:/nomarkdown}
