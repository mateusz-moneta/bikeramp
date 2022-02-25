import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BikerampTripsController } from './bikeramp-trips.controller';
import { GoogleMapsService } from './services/google-maps.service';
import { Trip } from './trip.entity';
import { TripsService } from './services/trips.service';

@Module({
  imports: [TypeOrmModule.forFeature([Trip])],
  controllers: [BikerampTripsController],
  providers: [ConfigService, GoogleMapsService, TripsService]
})
export class BikerampTripsModule {}
