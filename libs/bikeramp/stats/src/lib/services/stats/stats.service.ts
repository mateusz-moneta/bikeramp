import { Injectable } from '@nestjs/common';
import { Between, getConnection } from 'typeorm';

import { Trip } from '@bikeramp/bikeramp/trips-database';
import { DateService } from '../date/date.service';
import { MonthlyStatDto } from '../../dto/monthly-stat.dto';
import { WeeklyStatDto } from '../../dto/weekly-stat.dto';

@Injectable()
export class StatsService {

  constructor(private readonly dateService: DateService) {}

  async getMonthlyStats(): Promise<MonthlyStatDto[]> {
    const { firstDay, lastDay } = this.dateService.getFirstAndLastDayOfMonth();

    return await getConnection()
      .createQueryBuilder()
      .select("TO_CHAR(date, 'fmMonth, fmDDth')", "day")
      .addSelect("ROUND(SUM(distance), 3) || 'km'", "total_distance")
      .addSelect("ROUND(AVG(distance), 3) || 'km'", "avg_ride")
      .addSelect("ROUND(AVG(price), 2) || 'PLN'", "avg_price")
      .from(Trip, "trip")
      .where( {
        date: Between(firstDay, lastDay)
      })
      .groupBy("date")
      .orderBy("date")
      .getRawMany();
  }

  async getWeeklyStats(): Promise<WeeklyStatDto> {
    const { firstDay, lastDay } = this.dateService.getFirstAndLastDayOfWeek();

    return await getConnection()
      .createQueryBuilder()
      .select("SUM(distance) || 'km'", "total_distance")
      .addSelect("SUM(price) || 'PLN'", "total_price")
      .from(Trip, "trip")
      .where( {
        date: Between(firstDay, lastDay)
      })
      .getRawOne();
  }
}
