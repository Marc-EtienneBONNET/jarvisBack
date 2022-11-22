import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class MyEvent {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  alarmType: string;
  @Column()
  titre: string;
  @Column()
  detail: string;
  @Column()
  debut: Date;
  @Column()
  fin: Date;
  @Column()
  recurance: string;
  @Column()
  argent: number;
}
