import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import CreatePetUsecase from 'src/usecases/pets/create.pet.usecase';
import { CreatePetInputDto } from './dto/create-pet.dto';
import FindPetByIdUsecase from 'src/usecases/pets/find.by.pet.id';
import FindAllActivePetsUsecase from 'src/usecases/pets/find.all.active.pet.usecase';
import { EditPetUsecase } from 'src/usecases/pets/edit.pet.usecase';
import { UpdatePetInputDto } from './dto/update-pet.dto';
import { AuthGuard, Public } from '../auth/auth.guard';


@Controller()
export class PetsController {
  constructor(
    private readonly createPet: CreatePetUsecase,
    private readonly findPetById: FindPetByIdUsecase,
    private readonly findAllPets: FindAllActivePetsUsecase,
    private readonly editPet: EditPetUsecase
  ) { }

  @Post("pet/create")
  @UseGuards(AuthGuard)
  create(@Body() createPetDto: CreatePetInputDto) {
    return this.createPet.create(createPetDto);
  }

  @Public()
  @Get("pets/active")
  findAll() {
    return this.findAllPets.execute();
  }

  @Public()
  @Get('pet/:id')
  findOne(@Param('id') id: string) {
    return this.findPetById.execute(id);
  }

  @Patch('pet/update/:id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetInputDto) {
    return this.editPet.execute(id, updatePetDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.petsService.remove(+id);
  // }
}
