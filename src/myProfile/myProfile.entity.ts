import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//$2b$08$Lj7e5Mladk/zlvaRCcjIUe/OgVsK/RF/rFgghh3dQPLGmtOX48mYW
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
  tel: string;
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
  disponibilite: string;
  @Column()
  textDescriptif: string;
  @Column()
  contrat: string;
  @Column()
  solde: string;
  @Column()
  nbConnectionCv: number;
}

@Entity()
export class formations {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  lien: string;
  @Column()
  name: string;
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
  category: string;
  @Column()
  name: string;
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
  name: string;
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
