import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
export declare class BrandsService {
    create(createBrandDto: CreateBrandDto): string;
    findAll(): {};
    findOne(id: number): string;
    update(id: number, updateBrandDto: UpdateBrandDto): string;
    remove(id: number): string;
}
