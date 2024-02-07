import { Injectable } from "@nestjs/common";
import { DonationRepository } from "../../infra/donations/donation.repository";
import { Donation } from "../../infra/donations/entities/donation.entity";

@Injectable()
export default class FindAllActiveDonationsUsecase {
  constructor(
    // @Inject("DonationRepo")
    private donationsRepository: DonationRepository,
  ) {}
  async execute(): Promise<Donation[]> {
    try {
      const Donations = await this.donationsRepository.findAllActive();
      return Donations;
    } catch (err) {
      return err;
    }
  }
}
