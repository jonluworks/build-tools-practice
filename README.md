# build-tools-practice
A starter react project that uses webpack/babel that supports auto-prefixing and stylus css pre-processing.
Built from an empty directory for practice

## Tools

### Webpack dev server
npm start will run the webpack dev server which automatically starts the default browser and points to the hosted app.html file

### Stylus
Webpack is set up to take *.styl files and transpile them to css while applying autoprefixing for browser support

### Babel
Allows us to write up to ES2017 and react JSX without having to worry about backwards browser support. Specific browsers can be targetted using the env
preset options. All code will be transpiled down to ES5.
