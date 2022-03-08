import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString } from 'class-validator';

export class MonthlyStatDto {
  @ApiModelProperty()
  @IsString()
  readonly day: string;

  @ApiModelProperty()
  @IsString()
  readonly total_distance: string;

  @ApiModelProperty()
  @IsString()
  readonly avg_ride: string;

  @ApiModelProperty()
  @IsString()
  readonly avg_price: string;
}
