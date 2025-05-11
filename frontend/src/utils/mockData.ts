import { Step } from '../types/Step';
import { FileNode } from '../types/FileNode';

export function generateMockSteps(): Step[] {
  return [
    {
      title: 'Analyzing prompt',
      description: 'Processing your requirements and determining the best approach',
      timestamp: new Date()
    },
    {
      title: 'Creating project structure',
      description: 'Setting up the foundational files and folders',
      details: 'Creating:\n- index.html\n- styles.css\n- main.js\n- assets/\n- components/',
      timestamp: new Date()
    },
    {
      title: 'Implementing HTML structure',
      description: 'Building the core HTML elements for your website',
      details: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Your Website</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <header>\n    <!-- Navigation -->\n  </header>\n  <main>\n    <!-- Content -->\n  </main>\n  <footer>\n    <!-- Footer content -->\n  </footer>\n</body>\n</html>`,
      timestamp: new Date()
    },
    {
      title: 'Styling with CSS',
      description: 'Adding styles to make your website visually appealing',
      details: `/* Global styles */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Inter', sans-serif;\n  line-height: 1.6;\n  color: #333;\n}\n\n/* Header styles */\nheader {\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  padding: 1rem 2rem;\n}\n\n/* More styles... */`,
      timestamp: new Date()
    },
    {
      title: 'Adding JavaScript functionality',
      description: 'Implementing interactive elements and behavior',
      details: `// Main JavaScript file\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Initialize components\n  initNavigation();\n  initAnimations();\n});\n\nfunction initNavigation() {\n  const menuToggle = document.querySelector('.menu-toggle');\n  const nav = document.querySelector('nav');\n  \n  menuToggle.addEventListener('click', () => {\n    nav.classList.toggle('active');\n  });\n}\n\nfunction initAnimations() {\n  // Animation code here\n}`,
      timestamp: new Date()
    },
    {
      title: 'Optimizing for performance',
      description: 'Ensuring your website loads quickly and runs smoothly',
      details: 'Minimizing CSS and JavaScript files\nOptimizing images\nImplementing lazy loading for images',
      timestamp: new Date()
    },
    {
      title: 'Testing responsiveness',
      description: 'Making sure your website looks great on all devices',
      details: 'Tested on:\n- Mobile (375px)\n- Tablet (768px)\n- Desktop (1440px)',
      timestamp: new Date()
    },
    {
      title: 'Final touches',
      description: 'Polishing the design and fixing any issues',
      timestamp: new Date()
    }
  ];
}

export function generateMockFileStructure(): FileNode[] {
  return [
    {
      name: 'public',
      type: 'folder',
      children: [
        { name: 'favicon.ico', type: 'file' },
        { name: 'robots.txt', type: 'file' },
        { name: 'index.html', type: 'file' }
      ]
    },
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'assets', type: 'folder', children: [
          { name: 'logo.svg', type: 'file' },
          { name: 'hero-image.jpg', type: 'file' }
        ]},
        { name: 'components', type: 'folder', children: [
          { name: 'Header.js', type: 'file' },
          { name: 'Footer.js', type: 'file' },
          { name: 'Button.js', type: 'file' },
          { name: 'Hero.js', type: 'file' },
          { name: 'Features.js', type: 'file' }
        ]},
        { name: 'styles', type: 'folder', children: [
          { name: 'global.css', type: 'file' },
          { name: 'variables.css', type: 'file' },
          { name: 'components.css', type: 'file' }
        ]},
        { name: 'utils', type: 'folder', children: [
          { name: 'helpers.js', type: 'file' },
          { name: 'animations.js', type: 'file' }
        ]},
        { name: 'App.js', type: 'file' },
        { name: 'index.js', type: 'file' }
      ]
    },
    { name: 'package.json', type: 'file' },
    { name: 'README.md', type: 'file' },
    { name: 'tailwind.config.js', type: 'file' },
    { name: '.gitignore', type: 'file' }
  ];
}