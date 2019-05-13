class Antelope {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;

  }
  eat(food) {
    console.log(`Nibble nibble all the ${food}ies`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }

}
export default Antelope
