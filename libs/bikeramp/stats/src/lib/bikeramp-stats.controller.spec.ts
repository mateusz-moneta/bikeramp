import { Test, TestingModule } from '@nestjs/testing';
import { BikerampStatsController } from './bikeramp-stats.controller';

describe(BikerampStatsController.name, () => {
  let controller: BikerampStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikerampStatsController],
    }).compile();

    controller = module.get<BikerampStatsController>(BikerampStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
