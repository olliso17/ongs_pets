import { Injectable } from "@nestjs/common";
import { PetRepository } from "../../infra/pets/pets.repository";
import { UpdatePetInputDto } from "../../infra/pets/dto/update-pet.dto";
import { Pet } from "../../infra/pets/entities/pet.entity";
import { MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";

@Injectable()
export class EditPetUsecase {
    constructor(
        private petRepository: PetRepository,
    ) {}

    async execute(id: string, updatePet: UpdatePetInputDto): Promise<Pet | MessageErrorDto> {
        const petExist = await this.petRepository.find(id);

        if (!petExist) {
            return { message: "Pet not found" };
        }

        Object.assign(petExist, updatePet);
        petExist.updated_at = new Date();

        try {
            await this.petRepository.update(petExist);
            return petExist;
        } catch (error) {
            return { message: error.message };
        }
    }
}