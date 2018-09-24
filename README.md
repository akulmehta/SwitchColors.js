# SwitchColors.js
SwitchColors.js has a function switchColors () which returns random colors having controllable brightness and saturation. 

The switchColors() function also contains a rgbtohex() function which formats the RGB color values to a hexcode string.

The variable "range" controls the range of brightness/darkness you like for each of the r, g, b channels. Value of 255 means it uses the full range of brightness, while anything lower would produce darker shades.

The script is able to keep the r, g, b colors separated by a separation value which is set by the variable "sep" which can be specified. This prevents "greying" of colors and hence keeps the saturation of the colors high. Since it uses a separation value to separate out the r, g, b values, colors like yellow and cyan which would be difficult to see on white are also not found in the randomization. Thus the product is a dark and saturated color which are usually pleasing to the eye. Smaller separation values will produce more pastel like shades.

