import { Injectable } from "@nestjs/common";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";
import { FindByIdPetInputDto } from "src/infra/pets/dto/active.pet.by.id";
import { Pet } from "src/infra/pets/entities/pet.entity";
import { PetRepository } from "src/infra/pets/pets.repository";

@Injectable()
export default class ActivatePetUsecase {
    constructor(
        // @Inject("PetRepo")
        private PetsRepository: PetRepository,
    ) { }
    async execute(id,
        findByIdPetDto: FindByIdPetInputDto,
    ): Promise<Pet | MessageErrorDto> {
        const PetExist = await this.PetsRepository.find(id);
        if (!PetExist) {
            return { message: "Pet not found" };
        }


        if (
            findByIdPetDto.active === PetExist.active
        ) {
            return { message: "the status has already been implemented." };
        }
        if (
            findByIdPetDto.active !== PetExist.active
        ) {
            Object.assign(PetExist, findByIdPetDto);
            PetExist.updated_at = new Date();

            await this.PetsRepository.active(PetExist);
            return { message: "Pet updated successfully." };
        }
    }

}
