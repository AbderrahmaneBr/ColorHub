import { Color } from '../ColorHub.js'
 
var palette = Color().GenerateMatchingColorPalette("Monochromatic");
for (let index = 0; index < palette.length; index++) {
    const element = palette[index];
    document.getElementById(index).style.backgroundColor = element;
    
}

var rand_palette = Color().GenerateRandomColorPalette(4);
for (let index = 0; index < rand_palette.length; index++) {
    const element = rand_palette[index];
    document.getElementById("rand_"+index).style.backgroundColor = element;
    
}

var hex = document.getElementById("hex");
hex.innerHTML = palette[0];
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");

var rgb = Color().toRGB(hex.innerHTML);
r.innerHTML = rgb[0];
g.innerHTML = rgb[1];
b.innerHTML = rgb[2];
