import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { BikerampTripsController } from './bikeramp-trips.controller';
import { BikerampTripsDatabaseModule } from '@bikeramp/bikeramp/trips-database';
import { MapsService } from './services/maps/maps.service';
import { OpenStreetMapsService } from './services/open-street-maps/open-street-maps.service';
import { TripsService } from './services/trips/trips.service';

@Module({
  imports: [BikerampTripsDatabaseModule],
  controllers: [BikerampTripsController],
  providers: [ConfigService, MapsService, OpenStreetMapsService, TripsService]
})
export class BikerampTripsModule {}
