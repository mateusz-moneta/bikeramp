import { Test, TestingModule } from '@nestjs/testing';

import { OpenStreetMapsService } from './open-street-maps.service';

class OpenStreetMapsServiceMock {
  getCoordinates(address: string) {
    return { lat: 52.23268785, lon: 20.985199551502667 };
  }
}

describe(OpenStreetMapsService.name, () => {
  let openStreetMapsService: OpenStreetMapsService;

  beforeEach(async () => {
    const OpenStreetMapsServiceProvider = {
      provide: OpenStreetMapsService,
      useClass: OpenStreetMapsServiceMock
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenStreetMapsService, OpenStreetMapsServiceProvider]
    }).compile();

    openStreetMapsService = module.get<OpenStreetMapsService>(OpenStreetMapsService);
  })

  it('should call getCoordinates method with expected params', async () => {
    const getCoordinatesSpy = jest.spyOn(openStreetMapsService, 'getCoordinates');
    const address = 'Polanowice 68K, Polska';
    await openStreetMapsService.getCoordinates(address);
    expect(getCoordinatesSpy).toHaveBeenCalledWith(address);
  });
})
