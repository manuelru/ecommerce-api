"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PruebasService = void 0;
const common_1 = require("@nestjs/common");
let PruebasService = class PruebasService {
    create(createPruebaDto) {
        return 'This action adds a new prueba';
    }
    findAll() {
        return `This action returns all pruebas`;
    }
    findOne(id) {
        return `This action returns a #${id} prueba`;
    }
    update(id, updatePruebaDto) {
        return `This action updates a #${id} prueba`;
    }
    remove(id) {
        return `This action removes a #${id} prueba`;
    }
};
PruebasService = __decorate([
    (0, common_1.Injectable)()
], PruebasService);
exports.PruebasService = PruebasService;
//# sourceMappingURL=pruebas.service.js.map