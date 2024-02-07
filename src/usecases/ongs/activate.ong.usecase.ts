import { Injectable } from "@nestjs/common";
import { OngRepository } from "../../infra/ongs/ongs.repository";
import { FindByIdOngInputDto } from "../../infra/ongs/dto/active-ong.dto";
import { MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";
import Ong from "../../infra/ongs/entities/ong.entity";

@Injectable()
export default class ActivateOngUsecase {
    constructor(
        // @Inject("OngRepo")
        private ongsRepository: OngRepository,
    ) { }
    async execute(id,
        findByIdOngDto: FindByIdOngInputDto,
    ): Promise<Ong | MessageErrorDto> {
        const ongExist = await this.ongsRepository.find(id);
        if (!ongExist) {
            return { message: "ONG not found" };
        }


        if (
            findByIdOngDto.active === ongExist.active
        ) {
            return { message: "the status has already been implemented." };
        }
        if (
            findByIdOngDto.active !== ongExist.active
        ) {
            Object.assign(ongExist, findByIdOngDto);
            ongExist.updated_at = new Date();

            await this.ongsRepository.active(ongExist);
            return { message: "Ong updated successfully." };
        }
    }

}
