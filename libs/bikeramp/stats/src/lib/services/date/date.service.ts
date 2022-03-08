import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

import { dateFormat } from '../../configs/date-format.config';
import { DateRange } from '../../models/date-range.interface';
import { TimeUnit } from '../../models/time-unit.enum';

@Injectable()
export class DateService {
  getFirstAndLastDay(timeUnit: TimeUnit): DateRange {
    const today = moment();
    const firstDay = today.startOf(timeUnit).format(dateFormat);
    const lastDay = today.endOf(timeUnit).format(dateFormat);

    return { firstDay, lastDay };
  }
}
