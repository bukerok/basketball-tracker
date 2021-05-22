import renderer from 'react-test-renderer';

import ShootingPanel from '.';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('ShootingPanel', () => {
  it('renders correctly', () => {

    const tree = renderer.create(<ShootingPanel />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
