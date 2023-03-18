"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const menu_module_1 = require("./menu/menu.module");
const categorias_module_1 = require("./categorias/categorias.module");
const countries_module_1 = require("./countries/countries.module");
const genders_module_1 = require("./genders/genders.module");
const brands_module_1 = require("./brands/brands.module");
const categories_module_1 = require("./categories/categories.module");
const pruebas_module_1 = require("./pruebas/pruebas.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [menu_module_1.MenuModule, categorias_module_1.CategoriasModule, countries_module_1.CountriesModule, genders_module_1.GendersModule, brands_module_1.BrandsModule, categories_module_1.CategoriesModule, pruebas_module_1.PruebasModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map