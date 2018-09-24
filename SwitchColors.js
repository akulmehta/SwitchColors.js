//function to switch colors.
function switchColors() {
  var r, g, b, rg, gb, rb;
  var range = 255; // controls the range of r,g,b you would like
  //reduce the range if you want more darker colors
  var sep = range / 4; // controls the minimum separation for saturation
  //note- keep sep < range/3 otherwise may crash browser due to performance
  //reduce the sep if you do not mind pastel colors
  //generate r,g,b, values as long as any difference is < separation
  do {
    r = Math.floor(Math.random() * range);
    g = Math.floor(Math.random() * range);
    b = Math.floor(Math.random() * range);

    rg = Math.abs(r - g);
    gb = Math.abs(g - b);
    rb = Math.abs(r - b);
  } while (rg < sep || gb < sep || rb < sep);

  //convert the rgb to hex

  function rgbtohex(rgb) {
    var first, second; // makes the two hex code for each rgb value

    first = Math.floor(rgb / 16); //get first unit of hex
    second = rgb % 16; //get second unit of hex
    // convert to string with hex base 16
    first = first.toString(16);
    second = second.toString(16);
    //concatenate the two units of the hex
    var rgbtohex = first + second;
    //return the two unit hex code for the r,g,b value
    return rgbtohex;
  }

  //convert the r,g,b numbers to hex code by calling the rgbto hex function
  var r_str = rgbtohex(r),
    g_str = rgbtohex(g),
    b_str = rgbtohex(b);
  //concatenate the final string for the output
  var final = '#' + r_str + g_str + b_str;

  //output random color
  return final;
}
