import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MyProfile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  statut: string;
  @Column()
  nom: string;
  @Column()
  prenom: string;
  @Column()
  mail: string;
  @Column()
  adresse: string;
  @Column()
  tel: string;
  @Column()
  dateNaissance: Date;
  @Column()
  solde: number;
}
