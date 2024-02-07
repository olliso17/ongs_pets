import { Injectable } from "@nestjs/common";
import { PetRepository } from "../../infra/pets/pets.repository";
import { FindByIdPetInputDto } from "../../infra/pets/dto/active.pet.by.id";
import { Pet } from "../../infra/pets/entities/pet.entity";
import { MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";

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
