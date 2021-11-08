# real.digital Webcomponents Challenge

## Available Scripts

In the root directory, you can run:

### `npm i`

Install all dependencies

### `npm start`

Will start the application by default in the port `8080`

### `npm run build:dev`

Will create a develompent bundle

### `npm run build:prod`

Will create a production bundle

### Libraries used
This project uses to serve the content and make  a dev / prod bundle:

- Webpack
- webpack-cli
- webpack-dev-server

And some webpack plugins to deal with css
- css-loader
- style-loader

the rest is vanilla javascript and its Webcomponents specification

### Project Structure

The project have a `src` folder in which the `components` live, there's 3 main components:

#### `RealDigitalButton`
Here lives the implementation of `real-digital-button` webcomponent, this component triggers the validation and/or submit of the form

#### `RealDigitalTextField`
Here lives the implementation of `real-digital-form` webcomponent, this component takes care of representing and input text field and generating a validation through its attribute `placeholder`. It's attribute `name` is attached to the field name and `placelholder` witll display a placeholder field info to the user.

#### `RealDigitalForm`
Here lives the implementation of `real-digital-form` webcomponent, this component is in charge of triggering the form submission and manage the state of its internal components it receive as attributes `action` which is the uri of the endpoint to make the XHR call, and `method` which is the HTTP request method.
