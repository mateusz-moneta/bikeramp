import { Test, TestingModule } from '@nestjs/testing';
import * as moment from 'moment';

import { dateFormat } from '../../configs/date-format.config';
import { DateService } from './date.service';
import { TimeUnit } from '../../models/time-unit.enum';

describe(DateService.name, () => {
  let dateService: DateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateService]
    }).compile();

    dateService = await module.get(DateService);
  });

  it('DateService - should be defined', () => {
    expect(dateService).toBeDefined();
  });

  describe('getFirstAndLastDay', () => {
    it('should call getFirstAndLastDay method for month', async () => {
      const getFirstAndLastDaySpy = jest.spyOn(dateService, 'getFirstAndLastDay');
      dateService.getFirstAndLastDay(TimeUnit.MONTH);
      expect(getFirstAndLastDaySpy).toHaveBeenCalledWith(TimeUnit.MONTH);
    });

    it('should call getFirstAndLastDay method for week', async () => {
      const getFirstAndLastDaySpy = jest.spyOn(dateService, 'getFirstAndLastDay');
      dateService.getFirstAndLastDay(TimeUnit.WEEK);
      expect(getFirstAndLastDaySpy).toHaveBeenCalledWith(TimeUnit.WEEK);
    });
  });

  describe('moment', () => {
    it('should return a first and last day of month', async () => {
      const today = moment('03/08/2022');
      const firstDay = today.startOf('month').format(dateFormat);
      const lastDay = today.endOf('month').format(dateFormat);

      expect(firstDay).toBe('01/03/2022');
      expect(lastDay).toBe('31/03/2022');
    });

    it('should return a first and last day of week', async () => {
      const today = moment('03/08/2022');
      const firstDay = today.startOf('week').format(dateFormat);
      const lastDay = today.endOf('week').format(dateFormat);

      expect(firstDay).toBe('06/03/2022');
      expect(lastDay).toBe('12/03/2022');
    });
  });
});
