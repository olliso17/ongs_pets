import { Injectable } from "@nestjs/common";
import { RedisService } from "../../redis";
import { DonationRepository } from "../donations/donation.repository";
import { Donation } from "../donations/entities/donation.entity";

@Injectable()
export class RedisDonationsRepository {
    constructor(
        private readonly redis: RedisService,
        private readonly donationRepository: DonationRepository

    ) { }

    async findAllActive(): Promise<Donation[]> {
        const cachedDonations = await this.redis.get('Donations');
        if (!cachedDonations) {
            const Donations = await this.donationRepository.findAllActive();

            await this.redis.set('Donations', JSON.stringify(Donations), 'EX', 15);

            console.log('\x1b[36m%s\x1b[0m', 'From Database');

            return Donations;
        }
        console.log('\x1b[36m%s\x1b[0m', 'From Cache');

        return JSON.parse(cachedDonations);
    }

}
