import { Controller, Get } from '@nestjs/common';

import { StatsService } from './services/stats.service';

@Controller('stats')
export class BikerampStatsController {

  constructor(private readonly statsService: StatsService) {}

  @Get('weekly')
  async getWeekly() {
    return 'Weekly';
  }

  @Get('monthly')
  async getMonthly() {
    return 'Monthly';
  }
}
