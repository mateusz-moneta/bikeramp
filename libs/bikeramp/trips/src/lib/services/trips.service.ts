import { Injectable } from '@nestjs/common';

import { CreateTripDto } from '../dto/create-trip.dto';
import { GoogleMapsService } from './google-maps.service';
import { Trip } from '../trip.entity';

@Injectable()
export class TripsService {

  constructor(private readonly googleMapsService: GoogleMapsService) {}

  async create(createTripDto: CreateTripDto): Promise<any> {
    const cord = this.googleMapsService.getCoordinates(createTripDto.start_address);
    /* const trip = new Trip({
      ...createTripDto,
      distance: 10.5
    });
    return await trip.save(); */
    return cord;
  }
}
