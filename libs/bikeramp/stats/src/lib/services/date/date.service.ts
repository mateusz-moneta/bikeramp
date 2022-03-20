import { Injectable } from '@nestjs/common';
import { endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';

import { dateFormat } from '../../configs/date-format.config';
import { DateRange } from '../../models/date-range.interface';

@Injectable()
export class DateService {
  getFirstAndLastDayOfMonth(): DateRange {
    const today = new Date();
    const firstDay = format(startOfMonth(today), dateFormat);
    const lastDay = format(endOfMonth(today), dateFormat);

    return { firstDay, lastDay };
  }

  getFirstAndLastDayOfWeek(): DateRange {
    const today = new Date();
    const firstDay = format(startOfWeek(today), dateFormat);
    const lastDay = format(endOfWeek(today), dateFormat);

    return { firstDay, lastDay };
  }
}
