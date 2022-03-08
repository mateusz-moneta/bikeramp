import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Currency } from './models/currency.enum';
import { DistanceUnit } from './models/distance-unit.enum';
import { MonthlyStatDto } from './dto/monthly-stat.dto';
import { StatsService } from './services/stats/stats.service';
import { WeeklyStatDto } from './dto/weekly-stat.dto';

@Controller('stats')
export class BikerampStatsController {

  constructor(private readonly statsService: StatsService) {}

  @Get('monthly')
  @ApiTags('stats')
  @ApiResponse({
    status: 200,
    description: `This endpoint retrieves a summary of ride distances from current month, grouped by day.
    The summary should include sum of all rides distances from given day, average ride distance and average price for the ride.`,
    type: MonthlyStatDto,
    isArray: true
  })
  async getMonthly(): Promise<MonthlyStatDto[]> {
    return await this.statsService.getMonthlyStats(Currency.PLN, DistanceUnit.KM);
  }

  @Get('weekly')
  @ApiTags('stats')
  @ApiResponse({
    status: 200,
    description: 'This endpoint retrieves how many kilometers did the courier ride during current week and how much money he received for the rides.',
    type: WeeklyStatDto
  })
  async getWeekly(): Promise<WeeklyStatDto> {
    return await this.statsService.getWeeklyStats(Currency.PLN, DistanceUnit.KM);
  }
}
