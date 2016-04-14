# ReactJS Meetup validation examples
Martin Jackson

## Development

Assumptions: You have [Git Bash](https://git-scm.com/), [Atom Editor](https://atom.io/), [NodeJS/npm](https://nodejs.org/en/) already installed.

Note you might have to global install the following npm tools: webpack-dev-server and cross-env if you haven't already.
```
sudo npm install -g webpack-dev-server
sudo npm install -g webpack
sudo npm install -g cross-env
```

```
open Bash Shell
cd projects
git clone https://github.com/martinjackson/reactjs-meetup-validation.git
cd reactjs-meetup-validation/
```
You now have all source code/ pieces for the project in self contained working area.
This project has a package.json that lists all the JavaSciprt libraries and tools dependancies.

```
npm install
```
This will place all the needed dependancies in a node_modules directory.
(The first time this will take a few minutes.)

```
atom .
```
will launch the editor with the project folder.

To run the Dev webserver with the Live-reloader and Babel ES6 auto-build

```
npm start
open http://localhost:8080/
```


Copyright 2016 Martin Jackson
