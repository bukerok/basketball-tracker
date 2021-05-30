import renderer from 'react-test-renderer';

import ShootingPanel from '.';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));
jest.mock('react-redux', () => ({
  useSelector: () => [
    {
      date: 'mockDate',
      zone: 12,
      score: 3,
      attempts: 15,
    },
    {
      date: 'mockDate2',
      zone: 1,
      score: 5,
      attempts: 10,
    },
  ],
}));
jest.mock('../../store/features/shots/shotsSlice', () => ({
  selectRecords: () => {},
}));

describe('ShootingPanel', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ShootingPanel />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
