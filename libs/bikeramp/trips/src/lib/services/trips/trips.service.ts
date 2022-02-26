import { Injectable } from '@nestjs/common';
import { MapsService } from '../maps/maps.service';
import { OpenStreetMapsService } from '../open-street-maps/open-street-maps.service';

import { CreateTripDto } from '../../dto/create-trip.dto';
import { Trip } from '../../trip.entity';

@Injectable()
export class TripsService {

  constructor(private readonly mapsService: MapsService, private readonly openStreetMapsService: OpenStreetMapsService) {}

  async create(createTripDto: CreateTripDto): Promise<Trip> {
    const startAddressCoordinates = await this.openStreetMapsService.getCoordinates(createTripDto.start_address);
    const destinationAddressCoordinates = await this.openStreetMapsService.getCoordinates(createTripDto.destination_address);
    const trip = new Trip({
      ...createTripDto,
      distance: Math.round(this.mapsService.calcCrow(startAddressCoordinates, destinationAddressCoordinates) * 1000) / 1000
    });

    return trip.save();
  }
}
