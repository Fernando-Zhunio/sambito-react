# Installation

React/NextJS
--------------------
React version of the template requires Node and NPM or YARN to be installed.

### Installing React prerequisites

**Node.js and NPM:** You can download Node.js from [https://nodejs.org](https://nodejs.org/). NPM comes bundled with Node.js

For yarn, you can find the installation instructions [here](https://yarnpkg.com/en/docs/install).

### Installing packages

Before proceeding you'll need to install packages. You can do this by running **npm install / yarn install** from the root of your project to install all the required dependencies.

### Variables

In order to use Maps and openweather you'll need to add the API keys inside the .env file located in the root of your project. A env.local file is provided that you can edit to add your api keys.

To get a mapbox access token follow this link <https://www.mapbox.com>

To get an open weather api key follow this link <https://openweathermap.org/appid>

### Running React project
This template runs on Next.js . For detailed instructions on how to use it follow this link <https://nextjs.org/docs/>

To launch a dev server run `npm run dev or yarn dev`. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

To run a production ready build first run `yarn build` to build the project then run `yarn start` to start the server.