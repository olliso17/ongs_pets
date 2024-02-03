import { Injectable } from "@nestjs/common";
import { Pet } from "src/infra/pets/entities/pet.entity";
import { PetRepository } from "src/infra/pets/pets.repository";


@Injectable()
export default class FindPetByIdUsecase {
  constructor(
    // @Inject("UserRepo")
    private petRepository: PetRepository,
  ) {}
  async execute(id: string): Promise<Pet | { message: string }> {
    try {
      const Pet = await this.petRepository.find(id);

      return Pet;
    } catch (err) {
      return { message: "Pet not found" };
    }
  }
}
