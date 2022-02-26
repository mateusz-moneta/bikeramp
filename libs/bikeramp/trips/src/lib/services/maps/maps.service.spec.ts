import { Test, TestingModule } from '@nestjs/testing';

import { CoordinatesDto } from '../../dto/coordinates.dto';
import { MapsService } from './maps.service';

class MapsServiceMock {
  calcCrow(startAddressCoordinates: CoordinatesDto, destinationAddressCoordinates: CoordinatesDto) {
    return 234.34;
  }
}

describe(MapsService.name, () => {
  let mapsService: MapsService;

  beforeEach(async () => {
    const MapsServiceProvider = {
      provide: MapsService,
      useClass: MapsServiceMock
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [MapsService, MapsServiceProvider]
    }).compile();

    mapsService = module.get<MapsService>(MapsService);
  })

  it('should call calcRow method with expected params', async () => {
    const calcCrowSpy = jest.spyOn(mapsService, 'calcCrow');
    const startAddressCoordinates: CoordinatesDto = { lat: 52.23268785, lon: 20.985199551502667 };
    const destinationAddressCoordinates: CoordinatesDto = { lat: 52.23268785, lon: 20.985199551502667 };
    mapsService.calcCrow(startAddressCoordinates, destinationAddressCoordinates);
    expect(calcCrowSpy).toHaveBeenCalledWith(startAddressCoordinates, destinationAddressCoordinates);
  });
})
