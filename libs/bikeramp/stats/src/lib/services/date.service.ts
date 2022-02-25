import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
  getFirstAndLastDayOfMonth(): { firstDay: string; lastDay: string } {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    return {
      firstDay: new Date(year, month, 1).toLocaleString('pl'),
      lastDay: new Date(year, month + 1, 0).toLocaleString('pl')
    };
  }

  getFirstAndLastDayOfWeek(): { firstDay: string; lastDay: string } {
    const currentDate = new Date;
    const firstDay = currentDate.getDate() - currentDate.getDay();
    const lastDay = firstDay + 6;

    return {
      firstDay: new Date(currentDate.setDate(firstDay)).toLocaleString('pl'),
      lastDay: new Date(currentDate.setDate(lastDay)).toLocaleString('pl')
    };
  }
}
