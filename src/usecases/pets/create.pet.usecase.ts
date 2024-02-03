import { Inject, Injectable } from "@nestjs/common";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";
import { CreatePetInputDto } from "src/infra/pets/dto/create-pet.dto";
import { Pet } from "src/infra/pets/entities/pet.entity";
import { PetRepository } from "src/infra/pets/pets.repository";

@Injectable()
export default class CreatePetUsecase {
  constructor(
    // @Inject("PetRepo")
    private petsRepository: PetRepository,
  ) { }
  async create(createPetDto: CreatePetInputDto): Promise<Pet | MessageErrorDto> {
    
    const pet = new Pet(createPetDto)
  
    try {
      await this.petsRepository.create(pet);
      return pet;
    } catch (err) {
      return  {message:err.message};
    }
  }
}
