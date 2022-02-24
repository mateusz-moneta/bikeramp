import { Module } from '@nestjs/common';

import { BikerampStatsController } from './bikeramp-stats.controller';
import { StatsService } from './services/stats.service';

@Module({
  controllers: [BikerampStatsController],
  providers: [StatsService]
})
export class BikerampStatsModule {}
