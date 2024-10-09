class Enum {
  static internal = new Enum('An error has occured. Please, try again or contact us');

  constructor(type) {
    this.type = type;
  }

  message() {
    return this.type;
  }
}

module.exports = Enum;