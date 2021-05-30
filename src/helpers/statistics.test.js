import { calculateStats } from './statistics';

describe('statistics helper', () => {
  describe('calculateStats', () => {
    it('should calculate value', () => {
      const mockRecords = [
        {
          date: 'mockDate',
          zone: 2,
          score: 7,
          attempts: 13,
        },
        {
          date: 'mockDate2',
          zone: 4,
          score: 5,
          attempts: 11,
        },
      ];

      expect(calculateStats(mockRecords)['2pt']).toBe(50);
    });

    it('should return null if no values for shots category', () => {
      expect(calculateStats([]).ft).toBe(null);
    });
  });
});
