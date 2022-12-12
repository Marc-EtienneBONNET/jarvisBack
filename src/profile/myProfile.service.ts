import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MyProfile } from './myProfile.entity';

@Injectable()
export class MyProfileService {
  constructor(
    @InjectRepository(MyProfile)
    private myProfileRepository: Repository<MyProfile>,
  ) {}

  async getProfileTakeAll(): Promise<MyProfile[]> {
    return await this.myProfileRepository.find();
  }

  async getProfileById(id: number) {
    const tmp = await this.myProfileRepository.findOneBy({
      id: id,
    });
    return tmp;
  }

  async getProfileRemoveById(id: number) {
    const tmp = await this.myProfileRepository.findOneBy({
      id: id,
    });
    this.myProfileRepository.remove(tmp);
  }

  async getPassWord(mail: string) {
    const tmp = await this.myProfileRepository.findOneBy({
      mail: mail,
    });
    return tmp.password;
  }

  postNewEvent(data) {
    const tmp = new MyProfile();
    tmp.nom = data.nom;
    tmp.prenom = data.prenom;
    tmp.mail = data.mail;
    tmp.adresse = data.adresse;
    tmp.tel = data.tel;
    tmp.solde = data.solde;
    tmp.dateNaissance = data.dateNaissance;
    tmp.statut = data.statut;
    this.myProfileRepository.save(tmp);
  }

  async postNewPass(data) {
    const tmp = await this.myProfileRepository.findOneBy({
      id: 1,
    });
    tmp.password = data;
    this.myProfileRepository.save(tmp);
  }

  async MouvIsConnect(data) {
    data.profile.isConnect = data.isConnect;
    this.myProfileRepository.save(data.profile);
  }
}
