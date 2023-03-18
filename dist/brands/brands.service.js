"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const dbbrands = [
    {
        id: 1,
        name: 'Levis',
    },
    {
        id: 2,
        name: 'Coverce',
    },
];
let BrandsService = class BrandsService {
    create(createBrandDto) {
        return 'This action adds a new brand';
    }
    findAll() {
        return dbbrands;
    }
    findOne(id) {
        return `This action returns a #${id} brand`;
    }
    update(id, updateBrandDto) {
        return `This action updates a #${id} brand`;
    }
    remove(id) {
        return `This action removes a #${id} brand`;
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map