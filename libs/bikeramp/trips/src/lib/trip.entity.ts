import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'trips' })
export class Trip  extends BaseEntity {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column()
  start_address: string;

  @ApiModelProperty()
  @Column()
  destination_address: string;

  @Column({ type: 'numeric', precision: 10, scale: 3 })
  distance: number;

  @ApiModelProperty()
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @ApiModelProperty()
  @Column({ type: 'date' })
  date: string;

  constructor(partial: Partial<Trip>) {
    super();
    Object.assign(this, partial);
  }
}
