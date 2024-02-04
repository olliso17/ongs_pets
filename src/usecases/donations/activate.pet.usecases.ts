import { Injectable } from "@nestjs/common";
import { DonationRepository } from "src/infra/donations/donation.repository";
import { FindByIdDonationInputDto } from "src/infra/donations/dto/active.donation.by.id";
import { Donation } from "src/infra/donations/entities/donation.entity";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";

@Injectable()
export default class ActivateDonationUsecase {
    constructor(
        private donationsRepository: DonationRepository,
    ) { }
    async execute(id,
        findByIdDonationDto: FindByIdDonationInputDto,
    ): Promise<Donation | MessageErrorDto> {
        const DonationExist = await this.donationsRepository.find(id);
        if (!DonationExist) {
            return { message: "Donation not found" };
        }


        if (
            findByIdDonationDto.active === DonationExist.active
        ) {
            return { message: "the status has already been implemented." };
        }
        if (
            findByIdDonationDto.active !== DonationExist.active
        ) {
            Object.assign(DonationExist, findByIdDonationDto);
            DonationExist.updated_at = new Date();

            await this.donationsRepository.active(DonationExist);
            return { message: "Donation updated successfully." };
        }
    }

}
