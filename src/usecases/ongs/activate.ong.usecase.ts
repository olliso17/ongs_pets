import { Injectable } from "@nestjs/common";
import { FindByIdOngInputDto } from "src/infra/ongs/dto/active-ong.dto";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";
import Ong from "src/infra/ongs/entities/ong.entity";
import { OngRepository } from "src/infra/ongs/ongs.repository";

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
