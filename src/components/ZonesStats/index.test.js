import { render, screen } from '@testing-library/react';

import ZonesStats from '.';

describe('ZonesStats', () => {
  it('it should render correctly', () => {
    const { container } = render(
      <ZonesStats data={{}}/>
    );
    const zones = container.querySelectorAll('[data-type=zone]');

    expect(zones.length).toBe(15);
  });

  it('it shouldn\'t render anything in zone without data', () => {
    const { container } = render(
      <ZonesStats data={{}}/>
    );
    const zones = container.querySelectorAll('[data-type=zone]');

    zones.forEach((zone) => {
      expect(zone.textContent).toBe('');
    });
  });

  it('it should display some value for zones with data', () => {
    const { container } = render(
      <ZonesStats data={{
        1: {
          score: 15,
          attempts: 20,
        },
      }}/>
    );
    const zone1 = container.querySelector('[data-type=zone][data-zone="1"]');

    expect(zone1.textContent).toBeTruthy();
  });

  it('it should assign "zone_low" to zones with less than 50% accuracy', () => {
    const { container } = render(
      <ZonesStats data={{
        1: {
          score: 5,
          attempts: 20,
        },
      }}/>
    );
    const zone1 = container.querySelector('[data-type=zone][data-zone="1"]');

    expect(zone1.classList.contains('zone_low')).toBe(true);
  });

  it('it should assign "zone_medium" to zones with less than 75% accuracy', () => {
    const { container } = render(
      <ZonesStats data={{
        1: {
          score: 11,
          attempts: 20,
        },
      }}/>
    );
    const zone1 = container.querySelector('[data-type=zone][data-zone="1"]');

    expect(zone1.classList.contains('zone_medium')).toBe(true);
  });

  it('it should assign "zone_high" to zones with accuracy greater than 75%', () => {
    const { container } = render(
      <ZonesStats data={{
        1: {
          score: 16,
          attempts: 20,
        },
      }}/>
    );
    const zone1 = container.querySelector('[data-type=zone][data-zone="1"]');

    expect(zone1.classList.contains('zone_high')).toBe(true);
  });
});
