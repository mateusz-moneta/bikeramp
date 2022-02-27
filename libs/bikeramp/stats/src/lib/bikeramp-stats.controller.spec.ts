import { Test, TestingModule } from '@nestjs/testing';

import { BikerampStatsController } from './bikeramp-stats.controller';
import { StatsService } from './services/stats/stats.service';

describe(BikerampStatsController.name, () => {
  let controller: BikerampStatsController;
  let spyService: StatsService;

  beforeEach(async () => {
    const StatsServiceProvider = {
      provide: StatsService,
      useFactory: () => ({
        getMonthly: jest.fn(() => {}),
        getWeekly: jest.fn(() => {})
      })
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikerampStatsController],
      providers: [StatsService, StatsServiceProvider]
    }).compile();

    controller = module.get<BikerampStatsController>(BikerampStatsController);
    spyService = module.get<StatsService>(StatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling getMonthly method', () => {
    expect(controller.getMonthly()).not.toEqual(null);
  });

  it('calling getMonthly method', () => {
    controller.getMonthly();
    expect(spyService.getMonthlyStats).toHaveBeenCalled();
  });

  it('calling getWeekly method', () => {
    expect(controller.getWeekly()).not.toEqual(null);
  });

  it('calling getWeekly method', () => {
    controller.getWeekly();
    expect(spyService.getWeeklyStats).toHaveBeenCalled();
  });
});
