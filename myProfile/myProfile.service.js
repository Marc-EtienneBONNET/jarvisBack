"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require('bcrypt');
const myProfile_entity_1 = require("./myProfile.entity");
let ProfileService = class ProfileService {
    constructor(profileRepository, formationsRepository, competancesRepository, portfolioRepository) {
        this.profileRepository = profileRepository;
        this.formationsRepository = formationsRepository;
        this.competancesRepository = competancesRepository;
        this.portfolioRepository = portfolioRepository;
    }
    async takeAllProfile() {
        const res = [];
        const tabPro = await this.profileRepository.find();
        for (let i = 0; tabPro[i]; i++) {
            if (tabPro[i]) {
                const tmp = await this.createStructForAllInfoForOneProfile('id', tabPro[i].id);
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
        if (titreModif === 'password')
            profile[titreModif] = bcrypt.hash(modif, 8);
        else
            profile[titreModif] = modif;
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
        if (!tmpProfile)
            return;
        const tmpFormations = await this.formationsRepository.findBy({
            idProfile: tmpProfile.id,
        });
        const tmpCompetances = await this.competancesRepository.findBy({
            idProfile: tmpProfile.id,
        });
        const tmpPortfolio = await this.portfolioRepository.findBy({
            idProfile: tmpProfile.id,
        });
        const structProfile = Object.assign(Object.assign({}, tmpProfile), { formations: [], competances: [], portfolio: [] });
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
        }
        else
            tmpProfile = new myProfile_entity_1.profile();
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
        if (theProfile.id)
            tmpProfile.password = theProfile.password;
        else
            tmpProfile.password = await bcrypt.hash(theProfile.password, 8);
        tmpProfile.solde = theProfile.solde;
        await this.profileRepository.save(tmpProfile);
        for (let i = 0; theProfile.formations && theProfile.formations[i]; i++) {
            let tmpFormatiomn;
            if (theProfile.formations[i].id != -1) {
                tmpFormatiomn = theProfile.formations[i];
            }
            else {
                tmpFormatiomn = new myProfile_entity_1.formations();
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
                tmpCompetances = new myProfile_entity_1.competances();
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
                tmpPortfolio = new myProfile_entity_1.portfolio();
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
        const profile = await this.createStructForAllInfoForOneProfile('mail', mail);
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
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(myProfile_entity_1.profile)),
    __param(1, (0, typeorm_1.InjectRepository)(myProfile_entity_1.formations)),
    __param(2, (0, typeorm_1.InjectRepository)(myProfile_entity_1.competances)),
    __param(3, (0, typeorm_1.InjectRepository)(myProfile_entity_1.portfolio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=myProfile.service.js.map