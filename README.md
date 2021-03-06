## Mega Boilerplate App (Node.js)

Generated by http://megaboilerplate.com

### Configuration
- **Platform:** node
- **Framework**: express
- **Template Engine**: handlebars
- **CSS Framework**: bootstrap
- **CSS Preprocessor**: sass
- **JavaScript Framework**: react
- **Build Tool**: gulp
- **Unit Testing**: mocha
- **Database**: postgresql
- **Authentication**: 
- **Deployment**: none

### Getting started

```
 cd megaboilerplate-app

# Install NPM dependencies
$ npm install

# Start the app
$ node server.js

# Express server listening on port 3000
```

### React application structure

```
.
├── app/                       # React application
│   ├── actions/               # Redux actions
│   ├── components/            # React components
│   ├── reducers/              # Redux reducers
│   ├── store/                 # Store initialization and configuration
│   ├── main.js                # Client-side app entry-point
│   ├── routes.js              # Universal application routes (React Router)
├── controllers/               # Express route handlers
├── models/                    # Express database models
├── public/
│   ├── css/                   # Sass/LESS/PostCSS/CSS stylesheets (both source and generated)
│   ├── fonts/                 # Font Awesome web fonts
│   ├── js/                    # Third-party vendor files and generated React app (bundle.js)
├── views/
│   ├── layout.jade            # Main container, into which React app is rendered
│   ├── loading.jade           # Loading spinner animation for OAuth 1.0 / 2.0 authentication flow inside a popup
├── .babelrc                   # Babel config
├── .env                       # API keys, passwords, and other sensitive information
├── server.js                  # Express application
└── package.json               # NPM Dependencies and scripts
```
