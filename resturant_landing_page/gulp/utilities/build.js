const {
  series,
  parallel
} = require("gulp"), {
  pug
} = require("../html"), {
  sass
} = require("../styles"), {
  js
} = require("../scripts")

const env = require('gulp-env');
const {
  copy
} = require("./copies");


const {
  deleteFolder,
  cleanUnusedClasses
} = require("./clean")

const {
  copy_images
} = require("../staticFiles/images")

exports.build = async function (done) {

  env.set({
    STATE: "production"
  })

  await deleteFolder("./dist")


  series(pug, parallel(sass, js), parallel(copy, cleanUnusedClasses), copy_images)(done)

  done()
}