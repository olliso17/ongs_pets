import { Injectable } from "@nestjs/common";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";
import { UpdatePetInputDto } from "src/infra/pets/dto/update-pet.dto";
import { Pet } from "src/infra/pets/entities/pet.entity";
import { PetRepository } from "src/infra/pets/pets.repository";

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