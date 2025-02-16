class Enum {
  static internal = new Enum('An error has occured. Please, try again or contact us.');
  static created = new Enum('Created successfully.');
  static missingInfo = new Enum('All fields must be passed.');

  constructor(type) {
    this.type = type;
  }

  message() {
    return this.type;
  }
}

module.exports = Enum;