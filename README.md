# CV and Portfolio Website

This project is a personal CV and portfolio website for Xolisa Matika, showcasing professional experience, skills, and projects.

## Project Structure

```
cv-portfolio-website
├── public
│   ├── index.html        # Main entry point of the website
│   ├── about.html       # Information about Xolisa Matika
│   ├── projects.html     # Page showcasing projects
│   └── contact.html      # Contact information and form
├── src
│   ├── css
│   │   └── styles.css    # Styles for the entire website
│   ├── js
│   │   ├── main.js       # Main JavaScript functionality
│   │   └── projects.js    # Fetching and displaying repositories
│   └── assets            # Directory for images and media files
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Features

- **Responsive Design**: The website is designed to be mobile-friendly and responsive.
- **Project Showcase**: The projects page dynamically fetches and displays repositories.
- **Contact Form**: Visitors can reach out via a contact form.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd cv-portfolio-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the website.

## Usage Guidelines

- Update the `public/about.html` file with your personal information.
- Add your project repositories in the `src/js/projects.js` file to display them on the projects page.
- Customize styles in `src/css/styles.css` to match your personal branding.

## License

This project is open-source and available under the MIT License.