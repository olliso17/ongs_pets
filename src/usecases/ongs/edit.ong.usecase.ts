import { Injectable } from "@nestjs/common";
import { OngRepository } from "../../infra/ongs/ongs.repository";
import Ong from "../../infra/ongs/entities/ong.entity";
import { UpdateOngInputDto } from "../../infra/ongs/dto/update-ong.dto";
import { MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";

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