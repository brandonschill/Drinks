// var express = require('express');
// var app = express();
// var path = require('path');

// app.listen(1337);
// console.log('1337 is active.');




var recipe = document.getElementsByClassName('showRecipe');

var showMaiTai = document.getElementById('maitai');

function recipeShow() {
  showMaiTai.setAttribute('class', 'maitai');
}

recipe.onclick = recipeShow;