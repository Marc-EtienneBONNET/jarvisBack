"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const myProfile_service_1 = require("./myProfile.service");
const myProfile_controler_1 = require("./myProfile.controler");
const myProfile_entity_1 = require("./myProfile.entity");
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([myProfile_entity_1.profile, myProfile_entity_1.formations, myProfile_entity_1.competances, myProfile_entity_1.portfolio]),
        ],
        providers: [myProfile_service_1.ProfileService],
        controllers: [myProfile_controler_1.ProfileControler],
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=myProfile.module.js.map