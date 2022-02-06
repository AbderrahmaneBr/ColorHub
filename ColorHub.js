function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function randomChoice(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

export function Color() {
    const self = {
        toRGB: (hex)=>{
            if(hex.length<7){
                hex = hex + 0;
            }
            //Converting HEX Color to RGB
            if(hex.startsWith('#', 0)){
                //Striping '#'
                hex = hex.replace('#', '');
            }
            var r, g, b;
            r = parseInt(hex.charAt(0)+hex.charAt(1), 16);
            g = parseInt(hex.charAt(2)+hex.charAt(3), 16);
            b = parseInt(hex.charAt(4)+hex.charAt(5), 16);
            
            return [r, g, b];
        },
        toHex: (r, g, b)=>{
            var hex;
            hex = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            
            hex = hex.toUpperCase();

            if(hex.length<7){
                hex = hex + 0;
            }

            return hex;
        },
        ComplementaryRGB: (r, g, b, mode)=>{
            if(mode==="RGB"){
                return [255-r, 255-g, 255-b];
            } else {
                var hex = Color().toHex(255-r, 255-g, 255-b);
                return hex;
            }
        },
        ComplementaryHex: (hex, mode)=>{
            var rgb;
            rgb = Color().toRGB(hex);
            if(mode==="RGB"){
                return Color().ComplementaryRGB(rgb[0], rgb[1], rgb[2], "RGB");
            } else {
                return Color().ComplementaryRGB(rgb[0], rgb[1], rgb[2], "Hex");
            }
        },
        MonochromaticRGB: (r, g, b, value, mode)=>{
            // 1 -> 0 Getting Lighter
            // 1 -> 255 Getting Darker
            if(mode=="RGB"){
                return [parseInt((r/value)), parseInt((g/value)), parseInt((b/value))];
            } else {
                return Color().toHex(parseInt((r/value)), parseInt((g/value)), parseInt((b/value)));
            }

        },
        MonochromaticHex: (hex, value, mode)=>{
            // 1 -> 0 Getting Lighter
            // 1 -> 255 Getting Darker
            var rgb, r, g, b;
            rgb = Color().toRGB(hex);
            r = parseInt((rgb[0]/value));
            g = parseInt((rgb[1]/value));
            b = parseInt((rgb[2]/value));
            if(r>255) r=255;
            if(g>255) g=255;
            if(b>255) b=255;
            if(mode=="RGB"){
                return [r, g, b];
            } else {
                return Color().toHex(r, g, b);
            }
        },
        //Analogous: ()=>{Coming soon},
        //Triad: ()=>{Coming soon},
        //Compund: ()=>{Coming soon},
        GenerateColor: (mode)=>{
            if(mode==="RGB"){
                return [parseInt(randomNumber(0, 255)), parseInt(randomNumber(0, 255)), parseInt(randomNumber(0, 255))];
            } else {
                var chars;
                chars = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9']
                return "#"+randomChoice(chars)+randomChoice(chars)+randomChoice(chars)+randomChoice(chars)+randomChoice(chars)+randomChoice(chars);
            }
        },
        GenerateRandomColorPalette: (length)=>{
            var colorPalette = [];
            for (let index = 0; index < length; index++) {
                colorPalette[index] = Color().GenerateColor("Hex");
            }
            return colorPalette;
        },
        GenerateMatchingColorPalette: (type)=>{
            var colorPalette = [];
            if(type==="Complementary"){
                for (let index = 0; index < 4; index++) {
                    if(index==1 || index==3){    
                        colorPalette[index] = Color().ComplementaryHex(colorPalette[index-1]);
                    } else {
                        colorPalette[index] = Color().GenerateColor("Hex");
                    }
                }
                return colorPalette;
            } else {
                if(type==="Monochromatic"){
                    var l = 1;  //Luminosity
                    for (let index = 0; index < 4; index++) {
                        if(index==1){
                            colorPalette[index] = Color().MonochromaticHex(colorPalette[index-1], l-0.1, "Hex");
                            var color = Color().toRGB(colorPalette[index]);
                            if(color[0]==255 && color[1]==255 && color[2]==255){
                                colorPalette[index] = Color().MonochromaticHex(colorPalette[index-1], l-0.01, "Hex");
                            }
                        
                        } else if (index==2){
                            colorPalette[index] = Color().MonochromaticHex(colorPalette[index-1], l-0.2, "Hex");
                            var color = Color().toRGB(colorPalette[index]);
                            if(color[0]==255 && color[1]==255 && color[2]==255){
                                colorPalette[index] = Color().MonochromaticHex(colorPalette[index-1], l-0.11, "Hex");
                            }
                        
                        } else if (index==3){
                            colorPalette[index] = Color().MonochromaticHex(colorPalette[index-1], l-0.3, "Hex");
                            var color = Color().toRGB(colorPalette[index]);
                            if(color[0]==255 && color[1]==255 && color[2]==255){
                                colorPalette[index] = Color().MonochromaticHex(colorPalette[index-1], l-0.21, "Hex");
                            }
                            
                        } else {
                            colorPalette[index] = Color().GenerateColor("Hex"); //First Color
                        }
                        console.log(colorPalette[index]);
                    }
            
                    return colorPalette;
                }
                
            }
        }


    }

    return self;
}
