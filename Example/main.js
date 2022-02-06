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
