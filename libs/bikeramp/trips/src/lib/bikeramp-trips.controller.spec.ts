import { Test, TestingModule } from '@nestjs/testing';

import { BikerampTripsController } from './bikeramp-trips.controller';
import { CreateTripDto } from './dto/create-trip.dto';
import { MapsService } from './services/maps/maps.service';
import { OpenStreetMapsService } from './services/open-street-maps/open-street-maps.service';
import { TripsService } from './services/trips/trips.service';

describe(BikerampTripsController.name, () => {
  let controller: BikerampTripsController;
  let spyService: TripsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikerampTripsController],
      providers: [MapsService, OpenStreetMapsService, TripsService]
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
    expect(spyService.create).toHaveBeenCalledWith(dto);
  });
});
