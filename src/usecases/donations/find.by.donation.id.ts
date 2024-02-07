import { Injectable } from "@nestjs/common";
import { DonationRepository } from "../../infra/donations/donation.repository";
import { Donation } from "../../infra/donations/entities/donation.entity";


@Injectable()
export default class FindDonationByIdUsecase {
  constructor(
    // @Inject("UserRepo")
    private donationRepository: DonationRepository,
  ) {}
  async execute(id: string): Promise<Donation | { message: string }> {
    try {
      const Donation = await this.donationRepository.find(id);

      return Donation;
    } catch (err) {
      return { message: "Donation not found" };
    }
  }
}
