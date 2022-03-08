import { Test, TestingModule } from '@nestjs/testing';

import { Coordinates } from '../../models/coordinates.model';
import { MapsService } from './maps.service';

describe(MapsService.name, () => {
  let mapsService: MapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapsService]
    }).compile();

    mapsService = module.get<MapsService>(MapsService);
  })

  it('MapsService - should be defined', () => {
    expect(mapsService).toBeDefined();
  });

  describe('calcCrow', () => {
    it('should call method with expected params', async () => {
      const calcCrowSpy = jest.spyOn(mapsService, 'calcCrow');
      const startAddressCoordinates: Coordinates = { lat: 52.23268785, lon: 20.985199551502667 };
      const destinationAddressCoordinates: Coordinates = { lat: 52.23268785, lon: 20.985199551502667 };
      mapsService.calcCrow(startAddressCoordinates, destinationAddressCoordinates);
      expect(calcCrowSpy).toHaveBeenCalledWith(startAddressCoordinates, destinationAddressCoordinates);
    });

    it('should return distance for the same addresses', async () => {
      const startAddressCoordinates: Coordinates = { lat: 52.23268785, lon: 20.985199551502667 };
      const destinationAddressCoordinates: Coordinates = { lat: 52.23268785, lon: 20.985199551502667 };
      expect(mapsService.calcCrow(startAddressCoordinates, destinationAddressCoordinates)).toEqual(0);
    });

    it('should return distance for different addresses', async () => {
      const startAddressCoordinates: Coordinates = { lat: 50.23268654, lon: 22.985199551542237 };
      const destinationAddressCoordinates: Coordinates = { lat: 52.23268785, lon: 20.985199551502667 };
      expect(mapsService.calcCrow(startAddressCoordinates, destinationAddressCoordinates)).toEqual(262.36605540909994);
    });
  });
})
