import { render, screen, fireEvent } from '@testing-library/react';

import SimpleShotInput from '.';
import { SHOTS_INPUTS } from '../../helpers/constants/shotsInputs';

// TODO refactor to remove duplication between "Some"ShotInput
describe('SimpleShotInput', () => {
  it('should render correctly', () => {
    render(
      <SimpleShotInput
        inputType={SHOTS_INPUTS.text}
      />
    );

    expect(screen.getByLabelText('Score')).toBeInTheDocument();
    expect(screen.getByLabelText('Attempts')).toBeInTheDocument();
  });

  it('shouldn\'t reset inputs on erroneous values', () => {
    const mockScore = '20';
    const mockAttempt = '10';

    render(
      <SimpleShotInput
        inputType={SHOTS_INPUTS.text}
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
