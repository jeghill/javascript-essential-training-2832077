/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Bin {
  constructor( //parameters
    color,
    volume,
    sandwichColor,
    sandwichVolume,
    handles //properties
  ) {
    this.color = color;
    this.volume = volume;
    this.rubbishSandwhichBox = {
      sandwichColor: color,
      sandwichVolume: volume,
    };
    this.handles = handles;
  }
}

const blackBin = new Bin("black", 20, "white", 5, true);

console.log("black bin test", blackBin);
