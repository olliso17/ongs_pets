import { Injectable } from "@nestjs/common";
import { DonationRepository } from "src/infra/donations/donation.repository";
import { UpdateDonationInputDto } from "src/infra/donations/dto/update-donation.dto";
import { Donation } from "src/infra/donations/entities/donation.entity";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";

@Injectable()
export class EditDonationUsecase {
    constructor(
        private donationRepository: DonationRepository,
    ) {}

    async execute(id: string, updateDonation: UpdateDonationInputDto): Promise<Donation | MessageErrorDto> {
        const DonationExist = await this.donationRepository.find(id);

        if (!DonationExist) {
            return { message: "Donation not found" };
        }

        Object.assign(DonationExist, updateDonation);
        DonationExist.updated_at = new Date();

        try {
            await this.donationRepository.update(DonationExist);
            return DonationExist;
        } catch (error) {
            return { message: error.message };
        }
    }
}