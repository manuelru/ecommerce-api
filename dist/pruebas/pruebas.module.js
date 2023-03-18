"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PruebasModule = void 0;
const common_1 = require("@nestjs/common");
const pruebas_service_1 = require("./pruebas.service");
const pruebas_controller_1 = require("./pruebas.controller");
let PruebasModule = class PruebasModule {
};
PruebasModule = __decorate([
    (0, common_1.Module)({
        controllers: [pruebas_controller_1.PruebasController],
        providers: [pruebas_service_1.PruebasService]
    })
], PruebasModule);
exports.PruebasModule = PruebasModule;
//# sourceMappingURL=pruebas.module.js.map