import { Test, TestingModule } from '@nestjs/testing';
import { plainToClass } from 'class-transformer';

import { DateService } from '../date/date.service';
import { StatsService } from './stats.service';
import { Trip } from '@bikeramp/bikeramp/trips-database';
import { Currency } from '../../models/currency.enum';
import { DistanceUnit } from '../../models/distance-unit.enum';

const oneTrip: Trip = plainToClass(Trip, {
  start_address: 'Polanowice 68K, Polska',
  destination_address: 'Nowohucka 41, Krakow, Polska',
  price: 55.65,
  date: '2022-03-03T20:28:46.827Z'
});

describe(StatsService.name, () => {
  let dateService: DateService;
  let statsService: StatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateService, StatsService]
    }).compile();

    dateService = await module.get(DateService);
    statsService = await module.get(StatsService);
  });

  afterEach(() => jest.clearAllMocks());

  it('StatsService - should be defined', () => {
    expect(statsService).toBeDefined();
  });

  describe('getMonthlyStats', () => {
    it('should return statistics for month', async () => {
      const getRawMany = jest.fn();
      const orderBy = jest.fn(() => ({ getRawMany }));
      const groupBy = jest.fn(() => ({ orderBy }));
      const where = jest.fn(() => ({ groupBy }));
      const select = jest.fn(() => ({ where }));
      const createQueryBuilder = jest.fn(() => ({ select }));

      await statsService.getMonthlyStats(Currency.PLN, DistanceUnit.KM);
      expect(createQueryBuilder).toHaveBeenCalledWith('stats');
      expect(select).toHaveBeenCalledWith('user.uid');
      expect(where).toHaveBeenCalledWith('user.key IS NULL');
    });
  });
});
