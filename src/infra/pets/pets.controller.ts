import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdatePetDto } from './dto/update-pet.dto';
import CreatePetUsecase from 'src/usecases/pets/create.pet.usecase';
import { CreatePetInputDto } from './dto/create-pet.dto';
import FindPetByIdUsecase from 'src/usecases/pets/find.by.pet.id';

@Controller()
export class PetsController {
  constructor(
    private readonly createPet: CreatePetUsecase,
    private readonly findPetById: FindPetByIdUsecase
    ) {}

@Post("pet/create")
  create(@Body() createPetDto: CreatePetInputDto) {
    return this.createPet.create(createPetDto);
  }

  // @Get()
  // findAll() {
  //   return this.petsService.findAll();
  // }

  @Get('pet/:id')
  findOne(@Param('id') id: string) {
    return this.findPetById.execute(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
  //   return this.petsService.update(+id, updatePetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.petsService.remove(+id);
  // }
}
