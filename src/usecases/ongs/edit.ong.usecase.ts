import { Injectable } from "@nestjs/common";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";
import { UpdateOngInputDto } from "src/infra/ongs/dto/update-ong.dto";
import Ong from "src/infra/ongs/entities/ong.entity";
import { OngRepository } from "src/infra/ongs/ongs.repository";

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