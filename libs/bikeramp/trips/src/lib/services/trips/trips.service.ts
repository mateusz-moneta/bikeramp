import { Injectable } from '@nestjs/common';

import { CreateTripDto } from '../../dto/create-trip.dto';
import { MapsService } from '../maps/maps.service';
import { OpenStreetMapsService } from '../open-street-maps/open-street-maps.service';
import { Trip } from '@bikeramp/bikeramp/trips-database';
import { TripDto } from '../../dto/trip.dto';

@Injectable()
export class TripsService {

  constructor(private readonly mapsService: MapsService, private readonly openStreetMapsService: OpenStreetMapsService) {}

  async create(createTripDto: CreateTripDto): Promise<TripDto> {
    const [startAddressCoordinates, destinationAddressCoordinates] = await Promise.all([
      this.openStreetMapsService.getCoordinates(createTripDto.start_address),
      this.openStreetMapsService.getCoordinates(createTripDto.destination_address)
    ]);

    if (destinationAddressCoordinates && startAddressCoordinates) {
      const trip = new Trip({
        ...createTripDto,
        distance: Math.round(this.mapsService.calcCrow(startAddressCoordinates, destinationAddressCoordinates) * 1000) / 1000
      });

      return trip.save();
    }

    return null;
  }
}
