import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsDateString, IsNumberString, IsString } from 'class-validator';

export class CreateTripDto {
  @ApiModelProperty()
  @IsString()
  readonly start_address: string;

  @ApiModelProperty()
  @IsString()
  readonly destination_address: string;

  @ApiModelProperty()
  @IsNumberString()
  readonly price: number;

  @ApiModelProperty({ type: Date })
  @IsDateString()
  readonly date: Date;
}
