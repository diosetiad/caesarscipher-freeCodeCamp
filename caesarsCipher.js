function rot13(str) {
  return (
    str
      // returns a new string with matches any characters between A and Z
      .replace(
        /[A-Z]/g,
        // replaced by string created from the specified sequence of UTF-16 code units wich returns an integer modulus 26(number of alphabet) plus 65(ASCII dec = A)
        (L) => String.fromCharCode((L.charCodeAt(0) % 26) + 65)
      )
  );
}

// TEST CASES

console.log(rot13("SERR PBQR PNZC"));
// should decode to the string FREE CODE CAMP

console.log(rot13("SERR CVMMN!"));
// should decode to the string FREE PIZZA!

console.log(rot13("SERR YBIR?"));
// should decode to the string FREE LOVE?

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
