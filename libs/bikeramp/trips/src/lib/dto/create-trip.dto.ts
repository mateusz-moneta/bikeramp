import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateTripDto {
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
}
