import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNumber, IsString, IsUUID } from 'class-validator';

export class TripDto {
  @ApiModelProperty()
  @IsUUID()
  readonly id: number;

  @ApiModelProperty()
  @IsString()
  readonly start_address: string;

  @ApiModelProperty()
  @IsString()
  readonly destination_address: string;

  @ApiModelProperty()
  @IsNumber()
  readonly price: number;

  @ApiModelProperty({ type: Date })
  @IsDateString()
  readonly date: Date;

  @ApiModelProperty()
  @IsDateString()
  readonly distance: number;
}
