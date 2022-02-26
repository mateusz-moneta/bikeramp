import { Test, TestingModule } from '@nestjs/testing';

import { BikerampTripsController } from './bikeramp-trips.controller';
import { CreateTripDto } from './dto/create-trip.dto';
import { TripsService } from './services/trips/trips.service';

describe(BikerampTripsController.name, () => {
  let controller: BikerampTripsController;
  let spyService: TripsService;

  beforeEach(async () => {
    const TripsServiceProvider = {
      provide: TripsService,
      useFactory: () => ({
        create: jest.fn(() => ({}))
      })
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikerampTripsController],
      providers: [TripsService, TripsServiceProvider]
    }).compile();

    controller = module.get<BikerampTripsController>(BikerampTripsController);
    spyService = module.get<TripsService>(TripsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateTripDto();
    expect(controller.create(dto)).not.toEqual(null);
  });

  it('calling create method', () => {
    const dto = new CreateTripDto();
    controller.create(dto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(dto);
  });
});
