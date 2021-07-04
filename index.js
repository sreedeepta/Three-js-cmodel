module.exports = function (THREE) {
  var STLLoader = require('three-stl-loader')(THREE)
  var loader = new STLLoader()
  var stlPath = __dirname + '/dolphin.stl'

  return function (onLoad) {
    loader.load(stlPath, onLoad)
  }
}
