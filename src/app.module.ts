import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CategoriasModule } from './categorias/categorias.module';
import { CountriesModule } from './countries/countries.module';
import { GendersModule } from './genders/genders.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { PruebasModule } from './pruebas/pruebas.module';

@Module({
  imports: [MenuModule, CategoriasModule, CountriesModule, GendersModule, BrandsModule, CategoriesModule, PruebasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
