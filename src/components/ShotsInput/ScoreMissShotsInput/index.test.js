import React from 'react';
import { render } from '@testing-library/react';

import ScoreMissShotsInput from '.';

const mockZeroShots = {
  score: 0,
  attempts: 0,
};

describe('ScoreMissShotsInput', () => {
  it('should render correctly', () => {
    const { getByLabelText } = render(
      <ScoreMissShotsInput shots={mockZeroShots}/>
    );

    expect(getByLabelText('Entered value').textContent).toBe('Score 0 Attempts 0');
  });
});