import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  photo: string;
  @Column()
  nom: string;
  @Column()
  prenom: string;
  @Column()
  dateNaissance: string;
  @Column()
  adresse: string;
  @Column()
  mail: string;
  @Column()
  tel: boolean;
  @Column()
  linkedin: string;
  @Column()
  github: string;
  @Column()
  codingGame: string;
  @Column()
  statu: string;
  @Column()
  password: string;
  @Column()
  solde: string;
}

@Entity()
export class formations {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  photo: string;
  @Column()
  niveau: string;
  @Column()
  debut: string;
  @Column()
  fin: string;
  @Column()
  text: string;
  @Column()
  idProfile: number;
}

@Entity()
export class competances {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  photo: string;
  @Column()
  text: string;
  @Column()
  idProfile: number;
}

@Entity()
export class portfolio {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  photo: string;
  @Column()
  audio: string;
  @Column()
  lien: string;
  @Column()
  text: string;
  @Column()
  idProfile: number;
}
