import { Test, TestingModule } from '@nestjs/testing';

import { CreateTripDto } from '../../dto/create-trip.dto';
import { TripsService } from './trips.service';

class TripsServiceMock {
  create(createTripDto: CreateTripDto) {
    return {};
  }
}

describe(TripsService.name, () => {
  let tripsService: TripsService;

  beforeEach(async () => {
    const TripsServiceProvider = {
      provide: TripsService,
      useClass: TripsServiceMock
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [TripsService, TripsServiceProvider]
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
