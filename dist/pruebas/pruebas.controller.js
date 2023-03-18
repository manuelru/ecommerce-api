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
exports.PruebasController = void 0;
const common_1 = require("@nestjs/common");
const pruebas_service_1 = require("./pruebas.service");
const create_prueba_dto_1 = require("./dto/create-prueba.dto");
const update_prueba_dto_1 = require("./dto/update-prueba.dto");
let PruebasController = class PruebasController {
    constructor(pruebasService) {
        this.pruebasService = pruebasService;
    }
    create(createPruebaDto) {
        return this.pruebasService.create(createPruebaDto);
    }
    findAll() {
        return this.pruebasService.findAll();
    }
    findOne(id) {
        return this.pruebasService.findOne(+id);
    }
    update(id, updatePruebaDto) {
        return this.pruebasService.update(+id, updatePruebaDto);
    }
    remove(id) {
        return this.pruebasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prueba_dto_1.CreatePruebaDto]),
    __metadata("design:returntype", void 0)
], PruebasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PruebasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PruebasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prueba_dto_1.UpdatePruebaDto]),
    __metadata("design:returntype", void 0)
], PruebasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PruebasController.prototype, "remove", null);
PruebasController = __decorate([
    (0, common_1.Controller)('pruebas'),
    __metadata("design:paramtypes", [pruebas_service_1.PruebasService])
], PruebasController);
exports.PruebasController = PruebasController;
//# sourceMappingURL=pruebas.controller.js.map