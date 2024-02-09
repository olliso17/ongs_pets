import { Injectable } from "@nestjs/common";
import { DonationRepository } from "../../infra/donations/donation.repository";
import { CreateDonationInputDto } from "../../infra/donations/dto/create-donation.dto";
import { Donation } from "../../infra/donations/entities/donation.entity";
import { MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";

@Injectable()
export default class CreateDonationUsecase {
  constructor(
    private donationsRepository: DonationRepository,
  ) { }
  async create(createDonationDto: CreateDonationInputDto): Promise<Donation | MessageErrorDto> {

    const donation = new Donation(createDonationDto)

    try {
      await this.donationsRepository.create(donation);
      return donation;
    } catch (err) {
      return { message: err.message };
    }
  }
}
