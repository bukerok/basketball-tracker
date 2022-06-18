import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ZonesStats from '.';
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
jest.mock('react-redux', () => ({
  useSelector: () => mockShots,
}));
jest.mock('../../store/features/shots/shotsAPI', () => ({}));

describe('ZonesStatsContainer', () => {
  it('it should display selector by default', () => {
    const { container } = render(
      <ZonesStats />
    );

    expect(container.querySelector('.zones-stats')).toBeTruthy();
  });

  it('it shouldn\'t display details by default', () => {
    const { container } = render(
      <ZonesStats />
    );

    expect(container.querySelector('.zone-stats-sheet')).toBe(null);
  });

  it('it should open details for clicked zone', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <ZonesStats />
    );

    await user.click(container.querySelector('[data-type=zone][data-zone="1"]').firstChild.firstChild);

    const details = await screen.findByLabelText('Zone Detailed Statistics');

    expect(details).toBeInTheDocument();
  });
});
