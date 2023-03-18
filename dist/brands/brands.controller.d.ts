import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(createBrandDto: CreateBrandDto): string;
    findAll(): {};
    findOne(id: string): string;
    update(id: string, updateBrandDto: UpdateBrandDto): string;
    remove(id: string): string;
}
