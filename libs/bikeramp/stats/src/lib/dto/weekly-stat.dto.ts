import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsString } from 'class-validator';

export class WeeklyStatDto {
  @ApiModelProperty()
  @IsString()
  readonly total_distance: string;

  @ApiModelProperty()
  @IsString()
  readonly total_price: string;
}
