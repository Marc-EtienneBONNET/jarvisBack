"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEventModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const myEvent_service_1 = require("./myEvent.service");
const myEvent_controler_1 = require("./myEvent.controler");
const myEvent_entity_1 = require("./myEvent.entity");
let MyEventModule = class MyEventModule {
};
MyEventModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([myEvent_entity_1.MyEvent])],
        providers: [myEvent_service_1.MyEventService],
        controllers: [myEvent_controler_1.MyEventControler],
    })
], MyEventModule);
exports.MyEventModule = MyEventModule;
//# sourceMappingURL=myEvent.module.js.map