# Title
This is just a dummy website that counts how long you were on it with jquery and shows an image with some basic styling.

## Setup

There are a bunch of things setup for this project. Eslint maintains code quality by making sure all of the rules specified in the config pass before vite can build the dev server. Vite obviously packages up all the necessary node modules and builds the project in dist which is what is loaded into browser. We use sass as a better css. 

## Extra Credit

I also did some of the suggested extra setup. I use NVM to manage Node.js versions, which is specified in .nvmrc. nvm install and nvm use let you get and switch to using the correct version of node.

I also setup tailwind. It seems like it basiclly helps you do some CSS within your html in a very clean way without having to make a class and then make a selector on that class to do some very basic things like size, color, font etc.

Finally I setup favicon generation, which adds the little mini logo to the browser icon which is pretty cool. Here's a [screenshot](src/img/favicon_screenshot.png)

### Project Setup

All of this allows us the ability to run npm run dev and npm build to easily manage and build our project with hot reload. The dev server is at `http://localhost:5173`

## Deployment
I deployed the static page from my main branch of the repo on Render. The link can be found [here](https://starterpack-vagminv.onrender.com/)

## Acknowledgments

I had some issues with my vscode settings.json which I used Claude code to help me figure out. Otherwise I did all of the setup here myself based on the classmoji instructions.
