import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class TripDto {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly id: number;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly start_address: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly destination_address: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly price: number;

  @ApiModelProperty({ type: Date })
  @IsNotEmpty()
  @IsDateString()
  readonly date: Date;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly distance: number;
}
