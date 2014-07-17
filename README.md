# slush-phaser-game

A [slush][slush] generator for easily starting to make HTML5 games with
[Phaser][phaser].

# Features

- [Phaser][phaser]
- [Browserify][browserify]
- [Jade][jade]
- [SASS][sass]
- [JSHint][jshint]: keep your code clean
- [BrowserSync][browser-sync]: a local web server to test your code
- A project structure already established*, making it easier to get started

_*Uses separate states files and prefabs for the game objects, as
[Codevinsky][codevinsky] did in his great [tutorial][codevinsky-tutorial]. Of
course, it's totally up to you to keep or change that behaviour._

## Installation

Make sure [node][node], [gulp][gulp] and [slush][slush] are installed.

Then, install `slush-phaser-game` __globally__:

```sh
npm install -g slush-phaser-game
```

*Note: you may need to use sudo for this to work.*

## Usage

### Create a new project

Running the following command will create a new folder for your project:

```sh
slush phaser-game
```

You will be prompted to give your game a name, a resolution and the version of
Phaser you want to use.

### Get started

This will start the local web server and open your game in your browser:

```sh
npm run dev
```

Once the server is running, each modification will automatically update the page
opened in the browser.

A new folder (```dist```) should appear at the root of your project, containing
the generated files (HTML, CSS and JS) for your game. That's the content of this
folder you'll use when publishing your game.

## Project structure

```
awesome-phaser-game/
├── assets                        # Assets folder: images are at the root...
|   ├── audio                     # ... audio and music files are here...
|   └── fonts                     # ... while fonts go there.
├── dist                          # Generated folder.
|   ├── assets
|   ├── css
|   └── js
├── src
|   ├── scripts
|   |   ├── prefabs               # Put all your "prefabs" in that folder...
|   |   ├── states                # ... and your states in this one.
|   |   |   └── boot.js
|   |   |   └── menu.js
|   |   |   └── play.js
|   |   |   └── preloader.js
|   |   └── main.js               # Entry point of your code.
|   ├── stylesheets
|   |   └── style.scss
|   └── index.jade
├── .gitignore
├── .jshintrc
├── bower.json
├── config.js                     # A config file for your project.
├── gulpfile.js
└── package.json
```

[browser-sync]: http://www.browsersync.io/
[browserify]: http://browserify.org/
[codevinsky]: https://twitter.com/codevinsky
[codevinsky-tutorial]: http://www.codevinsky.com/phaser-2-0-tutorial-flappy-bird-part-1/
[jade]: http://jade-lang.com/
[jshint]: http://www.jshint.com/
[gulp]: http://gulpjs.com/
[node]: http://nodejs.org/
[phaser]: http://phaser.io
[sass]: http://sass-lang.com/
[slush]: http://slushjs.github.io
