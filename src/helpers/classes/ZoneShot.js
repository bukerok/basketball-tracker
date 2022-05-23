import { getZoneType } from '../shooting';
import SpotShot from './SpotShot';

export default class ZoneShot extends SpotShot {
  constructor({
    zone,
    score,
    attempts,
    date,
  }) {
    super({
      type: getZoneType(zone),
      score,
      attempts,
      date,
    });
    this._zone = zone;
  }

  get zone() {
    return this._zone;
  }
}
