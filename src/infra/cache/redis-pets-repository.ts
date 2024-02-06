import { Injectable } from "@nestjs/common";
import { RedisService } from "src/redis";
import { PetRepository } from "../pets/pets.repository";
import { Pet } from "../pets/entities/pet.entity";

@Injectable()
export class RedisPetsRepository {
    constructor(
        private readonly redis: RedisService,
        private readonly petRepository: PetRepository

    ) { }

    async findAllActive(): Promise<Pet[]> {
        const cachedPets = await this.redis.get('Pets');
        if (!cachedPets) {
            const Pets = await this.petRepository.findAllActive();

            await this.redis.set('Pets', JSON.stringify(Pets), 'EX', 15);

            console.log('\x1b[36m%s\x1b[0m', 'From Database');

            return Pets;
        }
        console.log('\x1b[36m%s\x1b[0m', 'From Cache');

        return JSON.parse(cachedPets);
    }


}
