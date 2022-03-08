import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'trips' })
export class Trip extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_address: string;

  @Column()
  destination_address: string;

  @Column({ type: 'numeric', precision: 10, scale: 3 })
  distance: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'date' })
  date: Date;

  constructor(partial: Partial<Trip>) {
    super();
    Object.assign(this, partial);
  }
}
