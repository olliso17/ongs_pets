import { Injectable } from "@nestjs/common";
import { Pet } from "src/infra/pets/entities/pet.entity";
import { PetRepository } from "src/infra/pets/pets.repository";

@Injectable()
export default class FindAllActivePetsUsecase {
  constructor(
    // @Inject("PetRepo")
    private petsRepository: PetRepository,
  ) {}
  async execute(): Promise<Pet[]> {
    try {
      const Pets = await this.petsRepository.findAllActive();
      return Pets;
    } catch (err) {
      return err;
    }
  }
}
