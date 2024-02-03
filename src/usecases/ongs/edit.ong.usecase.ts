import { Injectable } from "@nestjs/common";
import { MessageErrorDto } from "src/ongs/dto/create-ong.dto";
import { UpdateOngInputDto } from "src/ongs/dto/update-ong.dto";
import Ong from "src/ongs/entities/ong.entity";
import { OngRepository } from "src/ongs/ongs.repository";

@Injectable()
export class EditOngUsecase {
    constructor(
        private ongRepository: OngRepository,
    ) {}

    async execute(id: string, updateOng: UpdateOngInputDto): Promise<Ong | MessageErrorDto> {
        const ongExist = await this.ongRepository.find(id);

        if (!ongExist) {
            return { message: "ONG not found" };
        }

        Object.assign(ongExist, updateOng);
        ongExist.updated_at = new Date();

        try {
            await this.ongRepository.update(ongExist);
            return ongExist;
        } catch (error) {
            return { message: error.message };
        }
    }
}