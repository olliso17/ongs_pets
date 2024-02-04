import { Inject, Injectable } from "@nestjs/common";
import { DonationRepository } from "src/infra/donations/donation.repository";
import { CreateDonationInputDto } from "src/infra/donations/dto/create-donation.dto";
import { Donation } from "src/infra/donations/entities/donation.entity";
import { MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";

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
      return  {message:err.message};
    }
  }
}
