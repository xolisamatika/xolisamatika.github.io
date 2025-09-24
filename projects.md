---
layout: default
title: "Projects"
---

<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
</head>

# My Projects

Here are some of my public GitHub repositories:

<ul>
{% assign repos = site.github.public_repositories | sort: "pushed_at" | reverse %}
{% for repo in repos limit:10 %}
  <li>
    <a href="{{ repo.html_url }}">
      {% case repo.language %}
        {% when "JavaScript" %}
          <i class="devicon-javascript-plain colored"></i>
        {% when "Python" %}
          <i class="devicon-python-plain colored"></i>
        {% when "Java" %}
          <i class="devicon-java-plain colored"></i>
        {% when "HTML" %}
          <i class="devicon-html5-plain colored"></i>
        {% when "CSS" %}
          <i class="devicon-css3-plain colored"></i>
        {% when "Ruby" %}
          <i class="devicon-ruby-plain colored"></i>
        {% when "C#" %}
          <i class="devicon-csharp-plain colored"></i>
        {% when "TypeScript" %}
          <i class="devicon-typescript-plain colored"></i>
        {% when "Go" %}
          <i class="devicon-go-plain colored"></i>
        {% when "C++" %}
          <i class="devicon-cplusplus-plain colored"></i>
        {% else %}
          📦
      {% endcase %}
      {{ repo.name }}
    </a>
  </li>
{% endfor %}
</ul>


[back](./)
