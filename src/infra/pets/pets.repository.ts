import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pet } from "./entities/pet.entity";

@Injectable()
export class PetRepository {
  constructor(
    @InjectRepository(Pet)
    private typeOrm: Repository<Pet>,
  ) { }

  async create(Pet: Pet): Promise<Pet> {
    const new_Pet = await this.typeOrm.save(Pet);
    return new_Pet;
  }
  async find(id: string): Promise<Pet> {
    const Pet = await this.typeOrm.findOneOrFail({ where: { id } });
    return Pet;
  }
//   async active(Pet: Pet): Promise<Pet> {
//     const new_Pet = await this.typeOrm.save(Pet);
//     return new_Pet;
//   }
//   async findAll(): Promise<Pet[]> {
//     const Pets = await this.typeOrm.find({ relations: ["pets", "donations"] });
//     return Pets;
//   }
//   async findAllActive(): Promise<Pet[]> {
//     const Pets = await this.typeOrm.find({ where: { active: true }, relations: ["pets", "donations"] });
//     return Pets;
//   }
//   async update(updatePetDto: UpdatePetInputDto): Promise<Pet> {
//     const new_Pet = await this.typeOrm.save(updatePetDto);
//     return new_Pet;
//   }
}
