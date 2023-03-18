import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
export declare class CountriesService {
    create(createCountryDto: CreateCountryDto): string;
    findAll(): {};
    findOne(id: number): string;
    update(id: number, updateCountryDto: UpdateCountryDto): string;
    remove(id: number): string;
}
