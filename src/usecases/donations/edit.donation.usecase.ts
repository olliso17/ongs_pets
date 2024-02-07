import { Injectable } from "@nestjs/common";
import { DonationRepository } from "../../infra/donations/donation.repository";
import { MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";
import { UpdateDonationInputDto } from "../../infra/donations/dto/update-donation.dto";
import { Donation } from "../../infra/donations/entities/donation.entity";

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