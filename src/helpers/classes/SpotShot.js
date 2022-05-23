export default class SpotShot {
  constructor({
    type,
    score,
    attempts,
    date,
  }) {
    this._type = type;
    this._score = score;
    this._attempts = attempts;
    this._date = date ? new Date(date) : new Date();
  }

  get type() {
    return this._type;
  }

  get score() {
    return this._score;
  }

  get attempts() {
    return this._attempts;
  }

  get date() {
    return this._date;
  }
}
