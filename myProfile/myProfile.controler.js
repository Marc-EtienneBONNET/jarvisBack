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
exports.ProfileControler = void 0;
const common_1 = require("@nestjs/common");
const myProfile_service_1 = require("./myProfile.service");
const bcrypt = require('bcrypt');
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
let ProfileControler = class ProfileControler {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async takeAllProfile() {
        return await this.profileService.takeAllProfile();
    }
    async takeOneProfile(body) {
        if (!body || !body.source || !body.res)
            return 'Erreur de parametrage des argument donner a takeOneProfile(source, res)';
        else {
            return await this.profileService.createStructForAllInfoForOneProfile(body.source, body.res);
        }
    }
    async modifProfile(body) {
        if (!body.type || !body.res || !body.titreModif || !body.modif)
            console.log('Error: les argument rentrer sont incorrect :\nbody.type\nbody.res\nbody.titreModif\nbody.modif');
        else if (body.type === 'profile')
            this.profileService.mouvProfile(body.res, body.titreModif, body.modif);
        else if (body.type === 'formations') {
            this.profileService.mouvFormation(body.res, body.titreModif, body.modif);
        }
        else if (body.type === 'competances') {
            this.profileService.mouvCompetance(body.res, body.titreModif, body.modif);
        }
        else if (body.type === 'portfolio') {
            this.profileService.mouvPortfolio(body.res, body.titreModif, body.modif);
        }
        else
            console.log('Error: body.type doit etre soit :\nprofile\nformation\ncompetance\nportfolio');
    }
    async supProfile(body) {
        if (!body.res)
            console.log('Error: argument incorecte (body.res = id du profile)');
        else
            this.profileService.supProfile(body.res);
    }
    async addNewProfile(body) {
        if (!body.profile)
            console.log('Error: argument incorecte (body.profile)');
        else
            this.profileService.addNewProfile(body.profile);
    }
    async CheckPassword(body) {
        if (!body.mail || !body.password)
            console.log('Error: argument incorecte (body.mail, body.password)');
        else {
            return await this.profileService.CheckPassword(body.mail, body.password);
        }
    }
    async mouvProfileAll(body) {
        if (!body.res || !body.profile)
            console.log('Error: argument incorecte (body.res, body.profile)');
        else {
            try {
                await this.profileService.addNewProfile(body.profile);
            }
            catch (e) {
                console.log('Error: la modification de profile n as pas pus etre realiser');
            }
        }
    }
    uploadFile(file) {
        return file;
    }
    uplodAudio(file) {
        return file;
    }
    async sendImage(res, name) {
        let tmp;
        tmp = await (0, fs_1.readFile)('./img/' + name, (err, data) => {
            res.send(data);
        });
    }
    async sendaddNewConnectionImage(body) {
        await this.profileService.addNewConnection(body.id);
    }
};
__decorate([
    (0, common_1.Get)('takeAllProfile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "takeAllProfile", null);
__decorate([
    (0, common_1.Post)('takeOneProfile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "takeOneProfile", null);
__decorate([
    (0, common_1.Post)('mouvProfile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "modifProfile", null);
__decorate([
    (0, common_1.Post)('supProfile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "supProfile", null);
__decorate([
    (0, common_1.Post)('addNewProfile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "addNewProfile", null);
__decorate([
    (0, common_1.Post)('CheckPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "CheckPassword", null);
__decorate([
    (0, common_1.Post)('mouvProfileAll'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "mouvProfileAll", null);
__decorate([
    (0, common_1.Post)('uplodImg'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img', { dest: './img' })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileControler.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('uplodAudio'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('audio', { dest: './audio' })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileControler.prototype, "uplodAudio", null);
__decorate([
    (0, common_1.Get)('sendImage:name'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "sendImage", null);
__decorate([
    (0, common_1.Post)('addNewConnection'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileControler.prototype, "sendaddNewConnectionImage", null);
ProfileControler = __decorate([
    (0, common_1.Controller)('theProfile'),
    __metadata("design:paramtypes", [myProfile_service_1.ProfileService])
], ProfileControler);
exports.ProfileControler = ProfileControler;
//# sourceMappingURL=myProfile.controler.js.map