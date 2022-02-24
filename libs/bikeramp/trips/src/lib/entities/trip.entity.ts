import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'trips' })
export class Trip {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column()
  start_address: string;

  @ApiModelProperty()
  @Column()
  destination_address: string;

  @ApiModelProperty()
  @Column()
  price: number;

  @ApiModelProperty()
  @Column()
  date: string;
}
