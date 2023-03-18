import { PruebasService } from './pruebas.service';
import { CreatePruebaDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
export declare class PruebasController {
    private readonly pruebasService;
    constructor(pruebasService: PruebasService);
    create(createPruebaDto: CreatePruebaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePruebaDto: UpdatePruebaDto): string;
    remove(id: string): string;
}
