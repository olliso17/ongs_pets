import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import CreatePetUsecase from '../../usecases/pets/create.pet.usecase';
import FindPetByIdUsecase from '../../usecases/pets/find.by.pet.id';
import FindAllActivePetsUsecase from '../../usecases/pets/find.all.active.pet.usecase';
import { EditPetUsecase } from '../../usecases/pets/edit.pet.usecase';
import ActivatePetUsecase from '../../usecases/pets/activate.pet.usecase';
import { AuthGuard, Public } from '../auth/auth.guard';
import { CreatePetInputDto } from './dto/create-pet.dto';
import { FindByIdPetInputDto } from './dto/active.pet.by.id';
import { UpdatePetInputDto } from './dto/update-pet.dto';

@ApiTags()
@Controller()
export class PetsController {
  constructor(
    private readonly createPet: CreatePetUsecase,
    private readonly findPetById: FindPetByIdUsecase,
    private readonly findAllPets: FindAllActivePetsUsecase,
    private readonly editPet: EditPetUsecase,
    private readonly activeOng:ActivatePetUsecase
  ) { }

  @Post("pet/create")
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
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
  @Patch("pet/activate/:id")
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  activate(@Param("id") id: string, @Body() updateOngDto: FindByIdPetInputDto) {
    return this.activeOng.execute(id, updateOngDto);
  }
  @Patch('pet/update/:id')
  @UseGuards(AuthGuard)
   @ApiBearerAuth('JWT-auth')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetInputDto) {
    return this.editPet.execute(id, updatePetDto);
  }

}
