import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BikerampTripsController } from './bikeramp-trips.controller';
import { Trip } from './entities/trip.entity';
import { TripsService } from './services/trips.service';

@Module({
  imports: [TypeOrmModule.forFeature([Trip])],
  controllers: [BikerampTripsController],
  providers: [TripsService]
})
export class BikerampTripsModule {}
