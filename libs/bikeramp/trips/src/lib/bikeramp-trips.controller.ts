import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateTripDto } from './dto/create-trip.dto';
import { TripDto } from './dto/trip.dto';
import { TripsService } from './services/trips/trips.service';

@Controller('trips')
export class BikerampTripsController {

  constructor(private readonly tripsService: TripsService) {}

  @ApiTags('trips')
  @ApiResponse({
    type: TripDto,
    status: 201,
  })
  @Post()
  async create(@Body() createTripDto: CreateTripDto): Promise<TripDto> {
    return await this.tripsService.create(createTripDto);
  }
}
