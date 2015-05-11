# wordcloud
Demo Backbone App

Requirements
- nodejs installed ( https://nodejs.org/download/ )
- npm installed ( https://github.com/npm/npm )
- this repository cloned

Change location to cloned repository (let's call it /repo/ from now on).

Execute

```
# on windows
npm install
# on linux/osx
sudo npm install

bower install
```

You can now start your web server in /repo/ directory and point your browser
to http://localhost/src/ for development and live-changes. Make sure url ends with "/" (slash).


Execute

```
grunt build
```

This will run tests and build deployable files into /repo/target/ direcotry.
You can now start your web server in /repo/target/ directory and point your
browser to http://localhost/ to see the final
effect.
