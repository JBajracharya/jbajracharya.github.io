[Back to home](README.md)

## Using colors in CSS

### Three ways to specify color in CSS

**RGB Values:** Specify the numeric value for each of the three colors red, green and blue. Each color value range between 0 and 255

`example: rgb(100, 80, 120)`

**Hex codes:** Six-digit codes that represent the amount of red, green and blue preceded by a **#** symbol. In the example below, '66' hexadecimal code represents 102 red numeric value, 'cd' represents 205 green numeric value and 'aa' represents 170 numeric value

`example: #66cdaa`

**Color Names:** There are 147 predefined color names that are recognized by browser. This method is used less because of limited color palette and harder to remember color names.

`example: DarkCyan`

#### Opacity
CSS 3 allows to specify opacity within a selected color. The opacity value range from 0.0 to 1.0. In the example below, letter 'a' represents opacity and it's value is set to 0.4 which is 40% opacity.

`example: rgba(100, 80, 55, 0.4)`

### New way (HSL) to specify color introduced in CSS3

**Hue:**  Hue is often
represented as a color circle
where the angle represents the
color, although it may also be
shown as a slider with values
from 0 to 360.

**Saturation:** Saturation is the amount of
gray in a color. Saturation is
represented as a percentage.
100% is full saturation and 0%
is a shade of gray.

**Lightness:** Lightness is the amount of
white (lightness) or black
(darkness) in a color. Lightness
is represented as a percentage.
0% lightness is black, 100%
lightness is white, and 50%
lightness is normal. 

```
example:
body {
    color: hsl(300, 80%, 20%)
    background-color: hsla(10, 15%, 80%, 0.5)
}
```

[Back to home](README.md)




