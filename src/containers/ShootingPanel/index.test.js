import renderer from 'react-test-renderer';

import ShootingPanel from '.';
import ZoneShot from '../../helpers/classes/ZoneShot';

const mockShots = [
  new ZoneShot({
    zone: 12,
    score: 3,
    attempts: 15,
  }),
  new ZoneShot({
    zone: 1,
    score: 5,
    attempts: 10,
  }),
];

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));
jest.mock('react-redux', () => ({
  useSelector: () => mockShots,
}));
jest.mock('../../store/features/shots/shotsSlice', () => ({
  selectShots: () => {},
}));

describe('ShootingPanel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ShootingPanel />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
