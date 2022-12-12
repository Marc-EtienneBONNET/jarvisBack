import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MyProfile } from './../profile/myProfile.entity';

@Entity()
export class MyEvent {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user: number;
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
  argent: string;
  @Column()
  argentType: string;
}
