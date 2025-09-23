document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const navLinks = document.querySelectorAll('nav a');
  console.log("testing");
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetPage = this.getAttribute('href');
      loadPage(targetPage);
    });
  });

  function loadPage(page) {
    fetch(page)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        document.querySelector('.container').innerHTML = html;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
});