import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString } from 'class-validator';

export class MonthlyStatDto {
  @ApiModelProperty()
  @IsString()
  day: string;

  @ApiModelProperty()
  @IsString()
  total_distance: string;

  @ApiModelProperty()
  @IsString()
  avg_ride: string;

  @ApiModelProperty()
  @IsString()
  avg_price: string;
}
