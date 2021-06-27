import {
  calculateStats,
  calculateStat,
  calculateZoneStats,
} from './statistics';

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

  describe('calculateStat', () => {
    it('should return null if no data', () => {
      expect(calculateStat({})).toBe(null);
    });

    it('should return null if zeros provided', () => {
      expect(calculateStat({
        score: 0,
        attempts: 0,
      })).toBe(null);
    });
  });

  describe('calculateZoneStats', () => {
    it('should return empty object if no data', () => {
      expect(calculateZoneStats()).toStrictEqual({});
    });

    it('should accumulate records by zone', () => {
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
        {
          date: 'mockDate3',
          zone: 2,
          score: 13,
          attempts: 27,
        }
      ];
      const result = calculateZoneStats(mockRecords);

      expect(result[2]).toStrictEqual({
        score: 20,
        attempts: 40,
      });
      expect(result[4]).toStrictEqual({
        score: 3,
        attempts: 7,
      });
    });
  });
});
