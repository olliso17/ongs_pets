import { Injectable } from "@nestjs/common";
import { PetRepository } from "../../infra/pets/pets.repository";
import { Pet } from "../../infra/pets/entities/pet.entity";

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
