import { Controller, Get } from '@nestjs/common';

import { StatsService } from './services/stats/stats.service';
import { MonthlyStatDto } from './dto/monthly-stat.dto';
import { WeeklyStatDto } from './dto/weekly-stat.dto';

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
