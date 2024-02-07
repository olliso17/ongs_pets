import { Inject, Injectable } from "@nestjs/common";
import { PetRepository } from "../../infra/pets/pets.repository";
import { CreatePetInputDto } from "../../infra/pets/dto/create-pet.dto";
import { MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";
import { Pet } from "../../infra/pets/entities/pet.entity";

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
