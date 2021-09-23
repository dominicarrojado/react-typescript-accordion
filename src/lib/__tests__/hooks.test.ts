import faker from 'faker';
import { getRefValue } from '../hooks';

describe('hooks utilities', () => {
  describe('getRefValue()', () => {
    it('should return the value', () => {
      const refValue = faker.lorem.sentence();
      const refObject = { current: refValue };
      const res = getRefValue(refObject);

      expect(res).toBe(refValue);
    });
  });
});
