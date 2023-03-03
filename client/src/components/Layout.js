import React from 'react';
import Handlebars from 'handlebars';
import Nav from './Nav';

// Define the Handlebars template for the layout
const layoutTemplate = Handlebars.compile(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>{{title}}</title>
    </head>
    <body>
      <header>
        {{> nav}}
      </header>
      <main>
        {{{body}}}
      </main>
    </body>
  </html>
`);

function Layout({ title, children }) {
  // Define the context for the Handlebars template
  const context = {
    title,
    body: children,
  };

  // Render the layout using the Handlebars template
  const layoutHtml = layoutTemplate(context);

  // Return the layout as raw HTML
  return <div dangerouslySetInnerHTML={{ __html: layoutHtml }} />;
}

export default Layout;
