import { getManager } from 'typeorm';

import { CreateTripDto } from '../dto/create-trip.dto';
import { Trip } from '../entities/trip.entity';

export class TripsService {
  async create(tripData: CreateTripDto) {
    const trip = new Trip();
    trip.start_address = tripData.start_address;
    trip.destination_address = tripData.destination_address;
    trip.price = tripData.price;
    trip.date = tripData.date;
    const manager = getManager();
    return await manager.save(trip);
  }
}
