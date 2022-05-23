import SpotShot from '../classes/SpotShot';
import ZoneShot from '../classes/ZoneShot';

export default function shotFactory(aShot) {
  if (aShot.zone != null) {
    return new ZoneShot(aShot);
  }

  return new SpotShot(aShot);
}
