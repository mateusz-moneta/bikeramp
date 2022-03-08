import { Test, TestingModule } from '@nestjs/testing';

import { OpenStreetMapsService } from './open-street-maps.service';

describe(OpenStreetMapsService.name, () => {
  let openStreetMapsService: OpenStreetMapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenStreetMapsService]
    }).compile();

    openStreetMapsService = module.get<OpenStreetMapsService>(OpenStreetMapsService);
  })

  it('OpenStreetMapsService - should be defined', () => {
    expect(openStreetMapsService).toBeDefined();
  });

  describe('getCoordinates', () => {
    it('should call method with expected params', async () => {
      const getCoordinatesSpy = jest.spyOn(openStreetMapsService, 'getCoordinates');
      const address = 'Polanowice 68K, Polska';
      await openStreetMapsService.getCoordinates(address);
      expect(getCoordinatesSpy).toHaveBeenCalledWith(address);
    });

    it('should return coordinates for: Polanowice 68K, Polska', async () => {
      const address = 'Polanowice 68K, Polska';
      const coordinates = await openStreetMapsService.getCoordinates(address);
      expect(coordinates).toEqual({ lat: 50.2032757, lon: 20.052913966643743 });
    });
  });
})
