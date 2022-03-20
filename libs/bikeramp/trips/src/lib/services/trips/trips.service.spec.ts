import { Test, TestingModule } from '@nestjs/testing';

import { CreateTripDto } from '../../dto/create-trip.dto';
import { MapsService } from '../maps/maps.service';
import { OpenStreetMapsService } from '../open-street-maps/open-street-maps.service';
import { TripsService } from './trips.service';

describe(TripsService.name, () => {
  let tripsService: TripsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapsService, OpenStreetMapsService, TripsService]
    }).compile();

    tripsService = module.get<TripsService>(TripsService);
  })

  it('should call create method with expected params', async () => {
    const createNoteSpy = jest.spyOn(tripsService, 'create');
    const dto = new CreateTripDto();
    await tripsService.create(dto);
    expect(createNoteSpy).toHaveBeenCalledWith(dto);
  });
})
