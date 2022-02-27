import { Module } from '@nestjs/common';

import { BikerampStatsController } from './bikeramp-stats.controller';
import { BikerampTripsDatabaseModule } from '@bikeramp/bikeramp/trips-database';
import { DateService } from './services/date/date.service';
import { StatsService } from './services/stats/stats.service';

@Module({
  imports: [BikerampTripsDatabaseModule],
  controllers: [BikerampStatsController],
  providers: [DateService, StatsService]
})
export class BikerampStatsModule {}
