import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BikerampTripsController } from './bikeramp-trips.controller';
import { MapsService } from './services/maps/maps.service';
import { OpenStreetMapsService } from './services/open-street-maps/open-street-maps.service';
import { Trip } from './trip.entity';
import { TripsService } from './services/trips/trips.service';

@Module({
  imports: [TypeOrmModule.forFeature([Trip])],
  controllers: [BikerampTripsController],
  providers: [ConfigService, MapsService, OpenStreetMapsService, TripsService]
})
export class BikerampTripsModule {}
