import React from 'react';
import { fireEvent, render } from '@testing-library/react';

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

  it('should increase score on Score click', () => {
    const mockOnChange = jest.fn();
    const {
      getByLabelText,
    } = render(
      <ScoreMissShotsInput
        onChange={mockOnChange}
      />
    );
    const shotButton = getByLabelText('Score input');

    fireEvent.click(shotButton);

    expect(mockOnChange).toBeCalledWith({
      score: 1,
      attempts: 1,
    });
  });

  it('shouldn\'t change score on Miss click', () => {
    const mockOnChange = jest.fn();
    const {
      getByLabelText,
    } = render(
      <ScoreMissShotsInput
        onChange={mockOnChange}
      />
    );
    const missButton = getByLabelText('Miss input');

    fireEvent.click(missButton);

    expect(mockOnChange).toBeCalledWith({
      score: 0,
      attempts: 1,
    });
  });
});