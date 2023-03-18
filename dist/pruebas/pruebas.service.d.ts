import { CreatePruebaDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
export declare class PruebasService {
    create(createPruebaDto: CreatePruebaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePruebaDto: UpdatePruebaDto): string;
    remove(id: number): string;
}
