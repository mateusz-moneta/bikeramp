import { Injectable } from '@nestjs/common';
import { Between, getConnection } from 'typeorm';

import { Currency } from '../../models/currency.enum';
import { DateService } from '../date/date.service';
import { DistanceUnit } from '../../models/distance-unit.enum';
import { MonthlyStatDto } from '../../dto/monthly-stat.dto';
import { TimeUnit } from '../../models/time-unit.enum';
import { Trip } from '@bikeramp/bikeramp/trips-database';
import { WeeklyStatDto } from '../../dto/weekly-stat.dto';

@Injectable()
export class StatsService {

  constructor(private readonly dateService: DateService) {}

  async getMonthlyStats(currency: Currency, distanceUnit: DistanceUnit): Promise<MonthlyStatDto[]> {
    const { firstDay, lastDay } = this.dateService.getFirstAndLastDay(TimeUnit.MONTH);
    console.log({ firstDay, lastDay });

    return await getConnection()
      .createQueryBuilder()
      .select("TO_CHAR(date, 'fmMonth, fmDDth')", "day")
      .addSelect("ROUND(SUM(distance), 3) || :distanceUnit", "total_distance")
      .addSelect("ROUND(AVG(distance), 3) || :distanceUnit", "avg_ride")
      .addSelect("ROUND(AVG(price), 2) || :currency", "avg_price")
      .setParameters({ currency, distanceUnit })
      .from(Trip, "trip")
      .where( {
        date: Between(firstDay, lastDay)
      })
      .groupBy("date")
      .orderBy("date")
      .getRawMany();
  }

  async getWeeklyStats(currency: Currency, distanceUnit: DistanceUnit): Promise<WeeklyStatDto> {
    const { firstDay, lastDay } = this.dateService.getFirstAndLastDay(TimeUnit.WEEK);

    return await getConnection()
      .createQueryBuilder()
      .select("SUM(distance) || :distanceUnit", "total_distance")
      .addSelect("SUM(price) || :currency", "total_price")
      .setParameters({ currency, distanceUnit })
      .from(Trip, "trip")
      .where( {
        date: Between(firstDay, lastDay)
      })
      .getRawOne();
  }
}
