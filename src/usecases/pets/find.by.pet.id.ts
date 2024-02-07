import { Injectable } from "@nestjs/common";
import { PetRepository } from "../../infra/pets/pets.repository";
import { Pet } from "../../infra/pets/entities/pet.entity";


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
