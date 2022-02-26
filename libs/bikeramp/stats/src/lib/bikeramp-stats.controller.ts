import { Controller, Get } from '@nestjs/common';

import { StatsService } from './services/stats.service';
import { Trip } from '@bikeramp/bikeramp/trips';
import { WeeklyStatDto } from './dto/weekly-stat.dto';
import { MonthlyStatDto } from './dto/monthly-stat.dto';

@Controller('stats')
export class BikerampStatsController {

  constructor(private readonly statsService: StatsService) {}

  @Get('monthly')
  async getMonthly(): Promise<MonthlyStatDto[]> {
    return this.statsService.getMonthlyStats();
  }

  @Get('weekly')
  async getWeekly(): Promise<WeeklyStatDto> {
    return await this.statsService.getWeeklyStats();
  }
}
