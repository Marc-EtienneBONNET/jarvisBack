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
exports.MyEventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const myEvent_entity_1 = require("./myEvent.entity");
let MyEventService = class MyEventService {
    constructor(myEventRepository) {
        this.myEventRepository = myEventRepository;
    }
    async getEventTakeAll() {
        return await this.myEventRepository.find();
    }
    async getEventTakeAllForOneUser(user) {
        return await this.myEventRepository.findBy({
            user: user,
        });
    }
    getEventTakeById(id) {
        return this.myEventRepository.findOneBy({
            id: id,
        });
    }
    async getEventRemoveById(id) {
        const tmp = await this.myEventRepository.findOneBy({
            id: id,
        });
        this.myEventRepository.remove(tmp);
    }
    postNewEvent(data) {
        const tmp = new myEvent_entity_1.MyEvent();
        tmp.type = data.type;
        tmp.alarmType = data.alarmType;
        tmp.titre = data.titre;
        tmp.detail = data.detail;
        tmp.debut = data.debut;
        tmp.fin = data.fin;
        tmp.recurance = data.recurance;
        tmp.argent = data.argent;
        tmp.argentType = data.argentType;
        tmp.user = data.user;
        this.myEventRepository.save(tmp);
    }
};
MyEventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(myEvent_entity_1.MyEvent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MyEventService);
exports.MyEventService = MyEventService;
//# sourceMappingURL=myEvent.service.js.map