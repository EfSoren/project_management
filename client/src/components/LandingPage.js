import React from 'react';
import Handlebars from 'handlebars';

// Define the Handlebars template for the landing page
const landingPageTemplate = Handlebars.compile(`
  <div class="container">
    <h1>{{title}}</h1>
    <div class="login-container">
      <!-- Add login form here -->
    </div>
  </div>
`);

function LandingPage() {
  // Compile the Handlebars template and render the final output
  const html = landingPageTemplate({
    title: "Welcome to My Project Management App"
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default LandingPage;
