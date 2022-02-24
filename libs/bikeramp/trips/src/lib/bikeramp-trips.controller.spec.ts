import { Test, TestingModule } from '@nestjs/testing';
import { BikerampTripsController } from './bikeramp-trips.controller';

describe(BikerampTripsController.name, () => {
  let controller: BikerampTripsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikerampTripsController],
    }).compile();

    controller = module.get<BikerampTripsController>(BikerampTripsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
