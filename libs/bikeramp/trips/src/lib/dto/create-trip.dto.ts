import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNotEmpty } from 'class-validator';

export class CreateTripDto {
  @ApiModelProperty()
  @IsNotEmpty()
  start_address: string;

  @ApiModelProperty()
  @IsNotEmpty()
  destination_address: string;

  @ApiModelProperty()
  @IsNotEmpty()
  price: number;

  @ApiModelProperty()
  @IsNotEmpty()
  date: string;
}
