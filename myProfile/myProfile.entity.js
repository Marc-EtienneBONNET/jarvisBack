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
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolio = exports.competances = exports.formations = exports.profile = void 0;
const typeorm_1 = require("typeorm");
let profile = class profile {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], profile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "dateNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "mail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "tel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "linkedin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "github", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "codingGame", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "statu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "disponibilite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "textDescriptif", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "contrat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], profile.prototype, "solde", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], profile.prototype, "nbConnectionCv", void 0);
profile = __decorate([
    (0, typeorm_1.Entity)()
], profile);
exports.profile = profile;
let formations = class formations {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], formations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], formations.prototype, "lien", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], formations.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], formations.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], formations.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], formations.prototype, "debut", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], formations.prototype, "fin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], formations.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], formations.prototype, "idProfile", void 0);
formations = __decorate([
    (0, typeorm_1.Entity)()
], formations);
exports.formations = formations;
let competances = class competances {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], competances.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], competances.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], competances.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], competances.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], competances.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], competances.prototype, "idProfile", void 0);
competances = __decorate([
    (0, typeorm_1.Entity)()
], competances);
exports.competances = competances;
let portfolio = class portfolio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], portfolio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], portfolio.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], portfolio.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], portfolio.prototype, "audio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], portfolio.prototype, "lien", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], portfolio.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], portfolio.prototype, "idProfile", void 0);
portfolio = __decorate([
    (0, typeorm_1.Entity)()
], portfolio);
exports.portfolio = portfolio;
//# sourceMappingURL=myProfile.entity.js.map