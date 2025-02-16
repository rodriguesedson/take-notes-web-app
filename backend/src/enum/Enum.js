class Enum {
  static internal = new Enum('An error has occured. Please, try again or contact us.');
  static created = new Enum('Created successfully.');
  static missingInfo = new Enum('All fields must be passed.');
  static notFound = new Enum('Note not found. Try another parameter.');
  static noIdPassed = new Enum('No id was passed.');
  static noValuesUpdate = new Enum('No values passed to update');
  static updateSuccess = new Enum('Updated successfully');

  constructor(type) {
    this.type = type;
  }

  message() {
    return this.type;
  }
}

module.exports = Enum;