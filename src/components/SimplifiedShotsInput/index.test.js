import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import SimplifiedShotsInput from '.';

const mockZeroShots = {
  score: 0,
  attempts: 0,
};

describe('SimplifiedShotsInput', () => {
  it('should render correctly', () => {
    const { container } = render(
      <SimplifiedShotsInput shots={mockZeroShots}/>
    );

    expect(container.textContent).toBe('Score 0 Attempts 0');
  });

  it('should incement attempts when incement score', () => {
    const mockOnChange = jest.fn();
    const {
      container,
    } = render(
      <SimplifiedShotsInput
        shots={mockZeroShots}
        onChange={mockOnChange}
      />
    );
    const [scoreInput] = container.querySelectorAll('.button-input');
    const [scoreIncement] = scoreInput.querySelectorAll('button');

    fireEvent.click(scoreIncement);

    expect(mockOnChange).toBeCalledWith({
      score: 1,
      attempts: 1,
    });
  });

  it('should decrement score', () => {
    const mockOnChange = jest.fn();
    const {
      container,
    } = render(
      <SimplifiedShotsInput
        shots={{
          score: 2,
          attempts: 3,
        }}
        onChange={mockOnChange}
      />
    );
    const [scoreInput] = container.querySelectorAll('.button-input');
    const scoreDecrement = scoreInput.querySelectorAll('button')[1];

    fireEvent.click(scoreDecrement);

    expect(mockOnChange).toBeCalledWith({
      score: 1,
      attempts: 3,
    });
  });

  it('shouldn\'t decrement score lower than zero', () => {
    const mockOnChange = jest.fn();
    const {
      container,
    } = render(
      <SimplifiedShotsInput
        shots={{
          score: 0,
          attempts: 3,
        }}
        onChange={mockOnChange}
      />
    );
    const [scoreInput] = container.querySelectorAll('.button-input');
    const scoreDecrement = scoreInput.querySelectorAll('button')[1];

    fireEvent.click(scoreDecrement);

    expect(mockOnChange).toBeCalledWith({
      score: 0,
      attempts: 3,
    });
  });

  it('should incement attempts', () => {
    const mockOnChange = jest.fn();
    const {
      container,
    } = render(
      <SimplifiedShotsInput
        shots={{
          score: 2,
          attempts: 3,
        }}
        onChange={mockOnChange}
      />
    );
    const attemptsInput = container.querySelectorAll('.button-input')[1];
    const [attemptsIncement] = attemptsInput.querySelectorAll('button');

    fireEvent.click(attemptsIncement);

    expect(mockOnChange).toBeCalledWith({
      score: 2,
      attempts: 4,
    });
  });

  it('should decrement attempts', () => {
    const mockOnChange = jest.fn();
    const {
      container,
    } = render(
      <SimplifiedShotsInput
        shots={{
          score: 2,
          attempts: 3,
        }}
        onChange={mockOnChange}
      />
    );
    const attemptsInput = container.querySelectorAll('.button-input')[1];
    const attemptsDecrement = attemptsInput.querySelectorAll('button')[1];

    fireEvent.click(attemptsDecrement);

    expect(mockOnChange).toBeCalledWith({
      score: 2,
      attempts: 2,
    });
  });

  it('shouldn\'t decrement attempts lower than zero', () => {
    const mockOnChange = jest.fn();
    const {
      container,
    } = render(
      <SimplifiedShotsInput
        shots={{
          score: 0,
          attempts: 0,
        }}
        onChange={mockOnChange}
      />
    );
    const attemptsInput = container.querySelectorAll('.button-input')[1];
    const attemptsDecrement = attemptsInput.querySelectorAll('button')[1];

    fireEvent.click(attemptsDecrement);

    expect(mockOnChange).toBeCalledWith({
      score: 0,
      attempts: 0,
    });
  });

  it('score shouldn\'t be greater than attempts on initialization', () => {
    const mockOnChange = jest.fn();

    render(
      <SimplifiedShotsInput
        shots={{
          score: 15,
          attempts: 10,
        }}
        onChange={mockOnChange}
      />
    );

    expect(mockOnChange).toBeCalledWith({
      score: 10,
      attempts: 10,
    });
  });

  it('score shouldn\'t be greater than attempts on interaction', () => {
    const mockOnChange = jest.fn();
    const {
      container,
    } = render(
      <SimplifiedShotsInput
        shots={{
          score: 10,
          attempts: 10,
        }}
        onChange={mockOnChange}
      />
    );
    const attemptsInput = container.querySelectorAll('.button-input')[1];
    const attemptsDecrement = attemptsInput.querySelectorAll('button')[1];

    fireEvent.click(attemptsDecrement);

    expect(mockOnChange).toBeCalledWith({
      score: 9,
      attempts: 9,
    });
  });
});