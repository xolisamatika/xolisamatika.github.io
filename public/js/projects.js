// This file is responsible for fetching and displaying the repositories from a source (e.g., GitHub API) on the projects page.

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://gitlab.com/api/v4/users/<your-username>/projects')
    .then(response => response.json())
    .then(repos => {
      const projectsContainer = document.getElementById('projects-list');
      repos.forEach(repo => {
        const project = document.createElement('div');
        project.className = 'project';
        project.innerHTML = `
          <h3><a href="${repo.web_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || ''}</p>
        `;
        projectsContainer.appendChild(project);
      });
    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
    });
});