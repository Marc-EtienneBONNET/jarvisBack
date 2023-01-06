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
exports.MyEventControler = void 0;
const common_1 = require("@nestjs/common");
const myEvent_service_1 = require("./myEvent.service");
let MyEventControler = class MyEventControler {
    constructor(myEventService) {
        this.myEventService = myEventService;
    }
    async getEventTakeAll() {
        return await this.myEventService.getEventTakeAll();
    }
    async postEventTakeAllForOneUser(body) {
        return await this.myEventService.getEventTakeAllForOneUser(body.id);
    }
    async getEventTakeById(id) {
        return await this.myEventService.getEventTakeById(id);
    }
    async getEventRemoveById(body) {
        await this.myEventService.getEventRemoveById(body.id);
    }
    async postAddNewEvent(body) {
        if (body.id != -1) {
            await this.getEventRemoveById(body.id);
        }
        await this.myEventService.postNewEvent(body);
    }
    async postModifEvent(body) {
        if (body.id !== -1) {
            await this.myEventService.getEventRemoveById(body.id);
        }
        await this.myEventService.postNewEvent(body);
    }
};
__decorate([
    (0, common_1.Get)('getTakeAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyEventControler.prototype, "getEventTakeAll", null);
__decorate([
    (0, common_1.Post)('postTakeAllForOneUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyEventControler.prototype, "postEventTakeAllForOneUser", null);
__decorate([
    (0, common_1.Get)('getTakeById:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyEventControler.prototype, "getEventTakeById", null);
__decorate([
    (0, common_1.Post)('getRemoveById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyEventControler.prototype, "getEventRemoveById", null);
__decorate([
    (0, common_1.Post)('postAddNew'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyEventControler.prototype, "postAddNewEvent", null);
__decorate([
    (0, common_1.Post)('postModif'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyEventControler.prototype, "postModifEvent", null);
MyEventControler = __decorate([
    (0, common_1.Controller)('event'),
    __metadata("design:paramtypes", [myEvent_service_1.MyEventService])
], MyEventControler);
exports.MyEventControler = MyEventControler;
//# sourceMappingURL=myEvent.controler.js.map