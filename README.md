# ColorHub v1.0.0
<h2>What is ColorHub?</h2>
<p>ColorHub is a JavaScript Library that helps in Color Managament, Generating and Converting.</p>

<h2>Index</h2>

  - [Installation](#Installation)
  - [Usage](#Usage)
  
# Installation
<p>Installing npm package:</p>

```
npm install colorhub
```
<p>Importing the library in <b>JavaScript</b></p>

```javascript
import { Color } from './ColorHub.js'

```

# Usage
- <h3>Color().toRGB(Hex)</h3>

<p>This Function gets a HEX color as a parameter and it gives a tuple as a result, the resulting tuple contains the three values (red, green and blue) of the hex color given: </p>

```javascript
console.log(Color().toRGB("#EF93FA")); //OR Color().toRGB("EF93FA")
// Output: Array(3) [ 239, 147, 250 ]
```
<p>Let's say that we want to get only one color value:</p>

```javascript
var rgb = Color().toRGB("#EF93FA");
var r = rgb[0]; // Output: 239
var g = rgb[1]; // Output: 147
var b = rgb[2]; // Output: 250
```
- <h3>Color().toHex(R, G, B)</h3>
<p>This Function gets three values as a parameter and it gives a Hexadecimal value.</p>

```javascript
console.log(Color().toHex(239, 147, 250));
// Output: #EF93FA
```

- <h3>Color().ComplementaryRGB(R, G, B, MODE)</h3>
<p>This Function gets four values as a parameter (Red value, Green value, Blue value and MODE) and gives a <b>Complementary Color</b> of the RGB value given as a result.<br><b><i> - MODE: can be either "RGB" or "Hex" which basically means "in which form do you want your result to be (a Hex value or an RGB value)".</i></b></p>

```javascript
console.log(Color().ComplementaryRGB(239, 147, 250, "Hex"));
// Output: #106C50
console.log(Color().ComplementaryRGB(239, 147, 250, "RGB"));
// Output: Array(3) [ 16, 108, 5 ]
```

- <h3>Color().ComplementaryHex(Hex, MODE)</h3>
<p>This Function gets two values as a parameter (Hex value and MODE) and gives a Complementary Color of the HEX color given as a result</p>

```javascript
console.log(Color().ComplementaryHex("#EF93FA", "Hex"));
// Output: #106C50
console.log(Color().ComplementaryHex("#EF93FA", "RGB"));
// Output: Array(3) [ 16, 108, 5 ]
```

- <h3>Color().MonochromaticRGB(R, G, B, LUMINOSITY, MODE)</h3>
<p>This Function gets five values as a parameter (Red value, Green value, Blue value, Luminosity value and MODE) and gives the <b>Monochromatic Color</b> of the RGB Color given as a result.</p>
<p><i>LUMINOSITY: A value that control color's brightness, <b>Default value is 1</b>, <b>1 to 0 Color gets Brighter</b>, <b>1 to 10 Color gets Darker</b></i></p>

```javascript
console.log(Color().MonochromaticRGB(105, 198, 178, 0.8,"Hex"));
// Output: #83F7DE
console.log(Color().MonochromaticRGB(105, 198, 178, 4,"RGB"));
// Output: Array(3) [ 26, 49, 44 ]
```

- <h3>Color().MonochromaticHex(Hex, LUMINOSITY, MODE)</h3>
<p>Same as the previous function except it gets a Hexadecimal value as a parameter, Luminosity and a MODE.</p>

```javascript
console.log(Color().MonochromaticHex("#83F7DE", 0.8,"Hex"));
// Output: #A3F7DE
console.log(Color().MonochromaticHex("#A3F7DE", 4,"RGB"));
// Output: Array(3) [ "40", "61", "55" ]
```

- <h3>Color().GenerateColor(MODE)</h3>
<p>This Function gets one parameter (MODE), it consists on <b>Generating a Random Color</b> in MODE fromat.</p>

```javascript
console.log(Color().GenerateColor("Hex"));
// Output: #0EE717
console.log(Color().GenerateColor("RGB"));
// Output: Array(3) [ 83, 48, 156 ]
```

- <h3>Color().GenerateRandomColorPalette(Length)</h3>
<p>This Function gets one parameter (Length), it consists on <b>Generating a Random Color Palette</b> as an array, the number of colors generated depends on the Length given.</p>
```javascript
console.log(Color().GenerateRandomColorPalette(4));
// Output: Array(4) [ "#66F8E7", "#3F69C2", "#04F7FE", "#3878C4" ]
```

- <h3>Color().GenerateMatchingColorPalette(TYPE)</h3>
<p>This Function gets one parameter (Type), it <b>Generates a 4-colors Color Palette</b> as an array, color Combinations depends on the 'Type' parameter given:
<br>Type might be:<br>
- <b>"Complementary"</b> : This type consist on Generating two random colors along with their Complementary colors.<br>
- <b>"Monochromatic"</b> : This type consist on Generating one color and its brighter shades.</p>
</p>

```javascript
console.log(Color().GenerateMatchingColorPalette("Complementary"));
// Output: Array(4) [ "#9F85DB", "#607A24", "#752A7A", "#8AD585" ]
console.log(Color().GenerateMatchingColorPalette("Monochromatic"));
// Output: Array(4) [ "#7E03B0", "#8C03C3", "#AF03F3", "#FA04F3" ]
```
