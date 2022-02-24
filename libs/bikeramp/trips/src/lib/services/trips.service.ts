import { getManager } from 'typeorm';

import { CreateTripDto } from '../dto/create-trip.dto';
import { Trip } from '../entities/trip.entity';

export class TripsService {
  async create(createTripDto: CreateTripDto) {
    const trip = new Trip(createTripDto);
    const manager = getManager();
    return await manager.save(trip);
  }
}
