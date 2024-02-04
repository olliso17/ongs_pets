import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Donation } from "./entities/donation.entity";
import { UpdateDonationInputDto } from "./dto/update-donation.dto";
@Injectable()
export class DonationRepository {
  constructor(
    @InjectRepository(Donation)
    private typeOrm: Repository<Donation>,
  ) { }

  async create(Donation: Donation): Promise<Donation> {
    const new_Donation = await this.typeOrm.save(Donation);
    return new_Donation;
  }
  async find(id: string): Promise<Donation> {
    const Donation = await this.typeOrm.findOneOrFail({ where: { id } });
    return Donation;
  }
  async active(Donation: Donation): Promise<Donation> {
    const new_Donation = await this.typeOrm.save(Donation);
    return new_Donation;
  }

  async findAllActive(): Promise<Donation[]> {
    const Donations = await this.typeOrm.find({ where: { active: true } });
    return Donations;
  }
  async update(updateDonationDto: UpdateDonationInputDto): Promise<Donation> {
    const new_Donation = await this.typeOrm.save(updateDonationDto);
    return new_Donation;
  }
}
