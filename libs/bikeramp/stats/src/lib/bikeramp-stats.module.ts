import { Module } from '@nestjs/common';

import { BikerampStatsController } from './bikeramp-stats.controller';
import { BikerampTripsModule } from '@bikeramp/bikeramp/trips';
import { DateService } from './services/date.service';
import { StatsService } from './services/stats.service';

@Module({
  imports: [BikerampTripsModule],
  controllers: [BikerampStatsController],
  providers: [DateService, StatsService]
})
export class BikerampStatsModule {}
