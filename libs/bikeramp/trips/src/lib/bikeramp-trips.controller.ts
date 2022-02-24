import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { getManager } from 'typeorm';

import { CreateTripDto } from './dto/create-trip.dto';
import { Trip } from './entities/trip.entity';
import { TripsService } from './services/trips.service';

@Controller('trips')
export class BikerampTripsController {

  constructor(private readonly tripsService: TripsService) {}

  @ApiResponse({ type: Trip, status: 201 })
  @Post()
  async create(@Body() tripData: CreateTripDto) {
    return await this.tripsService.create(tripData);
  }
}
