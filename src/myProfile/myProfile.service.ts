import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const bcrypt = require('bcrypt');
import {
  profile,
  formations,
  competances,
  portfolio,
} from './myProfile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(profile)
    private profileRepository: Repository<profile>,
    @InjectRepository(formations)
    private formationsRepository: Repository<formations>,
    @InjectRepository(competances)
    private competancesRepository: Repository<competances>,
    @InjectRepository(portfolio)
    private portfolioRepository: Repository<portfolio>,
  ) {}

  async takeAllProfile() {
    const res = [];
    const tabPro = await this.profileRepository.find();
    for (let i = 0; tabPro[i]; i++) {
      if (tabPro[i]) {
        const tmp = await this.createStructForAllInfoForOneProfile(
          'id',
          tabPro[i].id,
        );
        res.push(tmp);
      }
    }
    return res;
  }

  async supProfile(res) {
    const tmpProfile = await this.profileRepository.findOneBy({
      id: res,
    });
    const tmpFormations = await this.formationsRepository.findBy({
      id: tmpProfile.id,
    });
    const tmpCompetances = await this.competancesRepository.findBy({
      id: tmpProfile.id,
    });
    const tmpPortfolio = await this.portfolioRepository.findBy({
      id: tmpProfile.id,
    });

    tmpPortfolio.map((element) => {
      this.portfolioRepository.remove(element);
    });
    tmpCompetances.map((element) => {
      this.competancesRepository.remove(element);
    });
    tmpFormations.map((element) => {
      this.formationsRepository.remove(element);
    });
    this.profileRepository.remove(tmpProfile);
  }

  async mouvProfile(res, titreModif, modif) {
    const profile = await this.profileRepository.findOneBy({
      id: res,
    });
    if (titreModif === 'password') profile[titreModif] = bcrypt.hash(modif, 8);
    else profile[titreModif] = modif;
    this.profileRepository.save(profile);
  }

  async mouvFormation(res, titreModif, modif) {
    const formation = await this.formationsRepository.findOneBy({
      id: res,
    });
    formation[titreModif] = modif;
    this.formationsRepository.save(formation);
  }

  async mouvCompetance(res, titreModif, modif) {
    const competance = await this.competancesRepository.findOneBy({
      id: res,
    });
    competance[titreModif] = modif;
    this.competancesRepository.save(competance);
  }

  async mouvPortfolio(res, titreModif, modif) {
    const Portfolio = await this.portfolioRepository.findOneBy({
      id: res,
    });
    Portfolio[titreModif] = modif;
    this.portfolioRepository.save(Portfolio);
  }

  async createStructForAllInfoForOneProfile(source, res) {
    const tmpProfile = await this.profileRepository.findOneBy({
      [source]: res,
    });
    if (!tmpProfile) return;
    const tmpFormations = await this.formationsRepository.findBy({
      idProfile: tmpProfile.id,
    });
    const tmpCompetances = await this.competancesRepository.findBy({
      idProfile: tmpProfile.id,
    });
    const tmpPortfolio = await this.portfolioRepository.findBy({
      idProfile: tmpProfile.id,
    });

    const structProfile = {
      ...tmpProfile,
      formations: [],
      competances: [],
      portfolio: [],
    };
    tmpFormations.map((element) => {
      structProfile.formations.push(element);
    });
    tmpCompetances.map((element) => {
      structProfile.competances.push(element);
    });
    tmpPortfolio.map((element) => {
      structProfile.portfolio.push(element);
    });
    return structProfile;
  }

  async addNewProfile(theProfile) {
    let tmpProfile;
    if (theProfile.id) {
      tmpProfile = await this.profileRepository.findOneBy({
        id: theProfile.id,
      });
    } else tmpProfile = new profile();
    tmpProfile.photo = theProfile.photo;
    tmpProfile.nom = theProfile.nom;
    tmpProfile.prenom = theProfile.prenom;
    tmpProfile.dateNaissance = theProfile.dateNaissance;
    tmpProfile.adresse = theProfile.adresse;
    tmpProfile.mail = theProfile.mail;
    tmpProfile.tel = theProfile.tel;
    tmpProfile.linkedin = theProfile.linkedin;
    tmpProfile.github = theProfile.github;
    tmpProfile.codingGame = theProfile.codingGame;
    tmpProfile.disponibilite = theProfile.disponibilite;
    tmpProfile.textDescriptif = theProfile.textDescriptif;
    tmpProfile.contrat = theProfile.contrat;
    tmpProfile.statu = theProfile.statu;
    tmpProfile.nbConnectionCv = theProfile.nbConnectionCv;
    if (theProfile.id) tmpProfile.password = theProfile.password;
    else tmpProfile.password = await bcrypt.hash(theProfile.password, 8);
    tmpProfile.solde = theProfile.solde; 
    await this.profileRepository.save(tmpProfile);

    for (let i = 0; theProfile.formations && theProfile.formations[i]; i++) {
      let tmpFormatiomn;
      if (theProfile.formations[i].id != -1){
        tmpFormatiomn = theProfile.formations[i];
      }
      else {
        tmpFormatiomn = new formations();
        tmpFormatiomn.lien = theProfile.formations[i].lien;
        tmpFormatiomn.name = theProfile.formations[i].name;
        tmpFormatiomn.photo = theProfile.formations[i].photo;
        tmpFormatiomn.niveau = theProfile.formations[i].niveau;
        tmpFormatiomn.debut = theProfile.formations[i].debut;
        tmpFormatiomn.fin = theProfile.formations[i].fin;
        tmpFormatiomn.text = theProfile.formations[i].text;
        tmpFormatiomn.idProfile = theProfile.formations[i].idProfile;
      }
      this.formationsRepository.save(tmpFormatiomn);
    }
    for (let i = 0; theProfile.competances && theProfile.competances[i]; i++) {
      let tmpCompetances;
      if (theProfile.competances[i].id != -1)
        tmpCompetances = theProfile.competances[i];
      else {
        tmpCompetances = new competances();
        tmpCompetances.category = theProfile.competances[i].category;
        tmpCompetances.name = theProfile.competances[i].name;
        tmpCompetances.photo = theProfile.competances[i].photo;
        tmpCompetances.text = theProfile.competances[i].text;
        tmpCompetances.idProfile = theProfile.competances[i].idProfile;
      }
      this.competancesRepository.save(tmpCompetances);
    }
    for (let i = 0; theProfile.portfolio && theProfile.portfolio[i]; i++) {
      let tmpPortfolio;
      if (theProfile.portfolio[i].id !== -1)
        tmpPortfolio = theProfile.portfolio[i];
      else {
        tmpPortfolio = new portfolio();
        tmpPortfolio.name = theProfile.portfolio[i].name;
        tmpPortfolio.photo = theProfile.portfolio[i].photo;
        tmpPortfolio.audio = theProfile.portfolio[i].audio;
        tmpPortfolio.lien = theProfile.portfolio[i].lien;
        tmpPortfolio.text = theProfile.portfolio[i].text;
        tmpPortfolio.idProfile = theProfile.portfolio[i].idProfile;
      }
      this.portfolioRepository.save(tmpPortfolio);
    }
  }

  async CheckPassword(mail, password) {
    const profile = await this.createStructForAllInfoForOneProfile(
      'mail',
      mail,
    );
    if (profile && (await bcrypt.compare(password, profile.password)) === true)
      return profile;
  }

  async addNewConnection(id) {
    const profile = await this.profileRepository.findOneBy({
      id: id,
    });
    profile.nbConnectionCv++;
    this.profileRepository.save(profile);
  }
}
