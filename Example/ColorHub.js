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
            var r=parseInt(r), g=parseInt(g), b=parseInt(b);
            hex = '#' + r.toString(16).padStart(2, 0) + g.toString(16).padStart(2, 0) + b.toString(16).padStart(2, 0);
            hex = hex.toUpperCase();

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
            // 1 -> 0 Getting Brighter
            // 1 -> 10 Getting Darker
            if(mode=="RGB"){
                var value_r=value, value_g=value, value_b=value;
                if(r/value>255) value_r = 1;
                if(g/value>255) value_g = 1;
                if(b/value>255) value_b = 1;

                return [parseInt((r/value_r)), parseInt((g/value_g)), parseInt((b/value_b))];
            } else {
                var value_r=value, value_g=value, value_b=value;
                if(r/value>255) value_r = 1;
                if(g/value>255) value_g = 1;
                if(b/value>255) value_b = 1;

                return Color().toHex(parseInt(r/value_r), parseInt(g/value_g), parseInt(b/value_b));
            }

        },
        MonochromaticHex: (hex, value, mode)=>{
            // 1 -> 0 Getting Brighter
            // 1 -> 10 Getting Darker
            var rgb, r, g, b;
            rgb = Color().toRGB(hex);

            var value_r=value, value_g=value, value_b=value;
            if(rgb[0]/value>255) value_r = 1;
            if(rgb[1]/value>255) value_g = 1;
            if(rgb[2]/value>255) value_b = 1;

            r = parseInt((rgb[0]/value_r)).toString().padStart(2, 0);
            g = parseInt((rgb[1]/value_g)).toString().padStart(2, 0);
            b = parseInt((rgb[2]/value_b)).toString().padStart(2, 0);

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
                    }
            
                    return colorPalette;
                }
                
            }
        }


    }

    return self;
}

