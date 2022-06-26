import { render, screen, fireEvent } from '@testing-library/react';

import ZoneShotInput from '.';
import { SHOTS_INPUTS } from '../../helpers/constants/shotsInputs';

describe('ZoneShotInput', () => {
  it('should render correctly', () => {
    render(
      <ZoneShotInput
        inputType={SHOTS_INPUTS.common}
      />
    );

    expect(screen.getByLabelText('Score')).toBeInTheDocument();
    expect(screen.getByLabelText('Attempts')).toBeInTheDocument();
  });

  it('shouldn\'t reset inputs on erroneous values', () => {
    const mockScore = '20';
    const mockAttempt = '10';

    render(
      <ZoneShotInput
        inputType={SHOTS_INPUTS.common}
        onAdd={jest.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText('Score'), {target: {value: mockScore}});
    fireEvent.change(screen.getByLabelText('Attempts'), {target: {value: mockAttempt}});
    fireEvent.click(screen.getByText('Add'));

    expect(screen.getByLabelText('Score').value).toBe(mockScore);
    expect(screen.getByLabelText('Attempts').value).toBe(mockAttempt);
  });
});
