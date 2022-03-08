import { Module } from '@nestjs/common';

import { BikerampStatsController } from './bikeramp-stats.controller';
import { DateService } from './services/date/date.service';
import { StatsService } from './services/stats/stats.service';

@Module({
  controllers: [BikerampStatsController],
  providers: [DateService, StatsService]
})
export class BikerampStatsModule {}
