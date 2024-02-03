import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import CreatePetUsecase from 'src/usecases/pets/create.pet.usecase';
import { CreatePetInputDto } from './dto/create-pet.dto';
import FindPetByIdUsecase from 'src/usecases/pets/find.by.pet.id';
import FindAllActivePetsUsecase from 'src/usecases/pets/find.all.active.pet.usecase';
import { EditPetUsecase } from 'src/usecases/pets/edit.pet.usecase';
import { UpdatePetInputDto } from './dto/update-pet.dto';

@Controller()
export class PetsController {
  constructor(
    private readonly createPet: CreatePetUsecase,
    private readonly findPetById: FindPetByIdUsecase,
    private readonly findAllPets: FindAllActivePetsUsecase,
    private readonly editPet: EditPetUsecase
  ) { }

  @Post("pet/create")
  create(@Body() createPetDto: CreatePetInputDto) {
    return this.createPet.create(createPetDto);
  }

  @Get("pets/active")
  findAll() {
    return this.findAllPets.execute();
  }

  @Get('pet/:id')
  findOne(@Param('id') id: string) {
    return this.findPetById.execute(id);
  }

  @Patch('pet/update/:id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetInputDto) {
    return this.editPet.execute(id, updatePetDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.petsService.remove(+id);
  // }
}
