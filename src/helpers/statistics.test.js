import { calculateStats } from './statistics';

describe('statistics helper', () => {
  describe('calculateStats', () => {
    it('should accumulate values from same category', () => {
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
          score: 3,
          attempts: 7,
        },
      ];

      expect(calculateStats(mockRecords)['2pt']).toStrictEqual({
        score: 10,
        attempts: 20,
      });
    });

    it('should return zeros if no values for shots category', () => {
      expect(calculateStats([]).ft).toStrictEqual({
        score: 0,
        attempts: 0,
      });
    });
  });
});
