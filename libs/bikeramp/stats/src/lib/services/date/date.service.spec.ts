import { Test, TestingModule } from '@nestjs/testing';

import { DateService } from './date.service';

describe(DateService.name, () => {
  let dateService: DateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateService]
    }).compile();

    dateService = await module.get(DateService);
  });

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 2, 20));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('DateService - should be defined', () => {
    expect(dateService).toBeDefined();
  });

  describe('getFirstAndLastDayOfMonth', () => {
    it('should call getFirstAndLastDayOfMonth method', async () => {
      const getFirstAndLastDayOfMonthSpy = jest.spyOn(dateService, 'getFirstAndLastDayOfMonth');
      dateService.getFirstAndLastDayOfMonth();
      expect(getFirstAndLastDayOfMonthSpy).toHaveBeenCalled();
    });

    it('should be returned result for getFirstAndLastDayOfMonth method', async () => {
      const result = dateService.getFirstAndLastDayOfMonth();
      expect(result).toEqual({ firstDay: '2022/03/01', lastDay: '2022/03/31' });
    });
  });

  describe('getFirstAndLastDayOfWeek', () => {
    it('should call getFirstAndLastDayOfWeek method', async () => {
      const getFirstAndLastDayOfWeekSpy = jest.spyOn(dateService, 'getFirstAndLastDayOfWeek');
      dateService.getFirstAndLastDayOfWeek();
      expect(getFirstAndLastDayOfWeekSpy).toHaveBeenCalled();
    });

    it('should be returned result for getFirstAndLastDayOfWeek method', async () => {
      const result = dateService.getFirstAndLastDayOfWeek();
      expect(result).toEqual({ firstDay: '2022/03/20', lastDay: '2022/03/26' });
    });
  });
});
