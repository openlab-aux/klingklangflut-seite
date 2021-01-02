# Website for Klingklangflut

## Setup (local)

1. Install Ruby (see .ruby-version in the project root for the exact version. I recommend using rbenv.)
2. Install bundler: `gem install bundler`
3. Bundle: `bundle install`
4. Install Node (see .nvmrc in the project root for the exact version. I recommend using NVM.)
5. Install yarn. [Instructions](https://yarnpkg.com/getting-started/install)
6. Run `yarn install` on the command line.
7. Call `yarn run develop` in the console. This starts jekyll and webpack. Changes will be compiled automatically.
8. Open <http://localhost:4000/>


## Development

* To change the text on the webpage, edit `index.md` (in the project root) (you can write markdown or html there).
* To add styles, see the `_sass` folder. If you add new files, make sure to import them in `main.sass`.
* To add javascript, see the `_webpack` folder. Yarn is used to manage dependencies.

See <http://localhost:4000/testtest/> for colors and html elements that can be reused.


## Deploy

Run `yarn run build` on the command line. This will generate HTML etc. in the docs folder. Commit that with git and push your changes to Github. Github will display the contents of the `docs` folder (without further postprocessing).
