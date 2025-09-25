---
layout: default
title: "Projects"
---

# My Projects

Here are my top 5 most recently updated public repositories:

<ul class="projects-grid" id="repo-list"></ul>

<!-- Custom styles for cards but matching Hacker theme -->
<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none; /* 🔹 removes bullet points */
}

.project-card {
  list-style: none; /* just in case */
background: #0d1117; /* dark card */
  border: 1px solid #30363d; /* 🔹 border */
  border-radius: 6px;
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
    border-color: #00ff00; /* 🔹 green border on hover */
  }

  .project-title {
    font-weight: bold;
    font-size: 1.1rem;
    color: #b5e853; /* hacker green */
    text-decoration: none;
  }

  .project-title:hover {
    text-decoration: underline;
  }

  .project-icons {
    margin-top: 0.5rem;
    font-size: 1.5em;
  }

  .project-desc {
    font-size: 0.85rem;
    margin-top: 0.6rem;
    color: #bbb;
  }

  .project-updated {
    font-size: 0.75rem;
    margin-top: 0.6rem;
    color: #666;
  }
</style>

<!-- Devicon icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

<script>
async function loadRepos() {
  const username = "xolisamatika"; // 🔹 replace this
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
  const repos = await res.json();
  const list = document.getElementById("repo-list");

  for (const repo of repos) {
    const langRes = await fetch(repo.languages_url);
    const langs = await langRes.json();

    const langIcons = Object.keys(langs).map(lang => {
      switch(lang) {
        case "JavaScript": return '<i class="devicon-javascript-plain colored"></i>';
        case "Python": return '<i class="devicon-python-plain colored"></i>';
        case "Java": return '<i class="devicon-java-plain colored"></i>';
        case "HTML": return '<i class="devicon-html5-plain colored"></i>';
        case "CSS": return '<i class="devicon-css3-plain colored"></i>';
        case "Ruby": return '<i class="devicon-ruby-plain colored"></i>';
        case "C++": return '<i class="devicon-cplusplus-plain colored"></i>';
        case "C#": return '<i class="devicon-csharp-plain colored"></i>';
        case "TypeScript": return '<i class="devicon-typescript-plain colored"></i>';
        case "Go": return '<i class="devicon-go-plain colored"></i>';
        case "PHP": return '<i class="devicon-php-plain colored"></i>';
        case "Kotlin": return '<i class="devicon-kotlin-plain colored"></i>';
        case "Swift": return '<i class="devicon-swift-plain colored"></i>';
        case "Dockerfile": return '<i class="devicon-docker-plain colored"></i>';
        case "Shell": return '<i class="devicon-powershell-plain colored"></i>';
        default: return `<span style="color:#00ff00">${lang}</span>`;
      }
    }).join(" ");

    const updated = new Date(repo.pushed_at).toLocaleDateString();

    const li = document.createElement("li");
    li.className = "project-card";
    li.innerHTML = `
      <a class="project-title" href="${repo.html_url}" target="_blank">${repo.name}</a>
      <div class="project-icons">${langIcons}</div>
      ${repo.description ? `<p class="project-desc">${repo.description}</p>` : ""}
      <p class="project-updated">Last updated: ${updated}</p>
    `;
    list.appendChild(li);
  }
}

loadRepos();
</script>
