import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

const dbgenders= [
  {
    id: 1,
    name: 'Hombre',
  },
  {
    id: 2,
    name: 'Mujer',
  }
];


@Injectable()
export class GendersService {
  create(createGenderDto: CreateGenderDto) {
    return 'This action adds a new gender';
  }

  findAll() {
    return dbgenders;
  }

  findOne(id: number) {
    return `This action returns a #${id} gender`;
  }

  update(id: number, updateGenderDto: UpdateGenderDto) {
    return `This action updates a #${id} gender`;
  }

  remove(id: number) {
    return `This action removes a #${id} gender`;
  }
}
