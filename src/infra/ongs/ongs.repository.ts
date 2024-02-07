import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Ong from "./entities/ong.entity";
import { UpdateOngInputDto } from "./dto/update-ong.dto";

@Injectable()
export class OngRepository {
  constructor(
    @InjectRepository(Ong)
    private typeOrm: Repository<Ong>,
  ) { }

  async create(ong: Ong): Promise<Ong> {
    const new_ong = await this.typeOrm.save(ong);
    return new_ong;
  }
  async find(id: string): Promise<Ong> {
    const Ong = await this.typeOrm.findOneOrFail({ where: { id }, relations: ["pets", "donations"], });
    return Ong;
  }
  async active(Ong: Ong): Promise<Ong> {
    const new_Ong = await this.typeOrm.save(Ong);
    return new_Ong;
  }
  async findAll(): Promise<Ong[]> {
    const ongs = await this.typeOrm.find({ relations: ["pets", "donations"] });
    return ongs;
  }
  async findAllActive(): Promise<Ong[]> {
    const ongs = await this.typeOrm.find({ where: { active: true }, relations: ["pets", "donations"] });
    const filteredOngs = ongs.map((ong) => {
      ong.pets = ong.pets.filter((pet) => {pet.active === true && pet.to_adopt === false});
      ong.donations = ong.donations.filter((donation) => donation.active === true);
      
      return ong;
    });
  
    return filteredOngs;
  }
  async findAllState(state:string): Promise<Ong[]> {
    const ongs = await this.typeOrm.find({ where: { state: state , active:true}, relations: ["pets", "donations"] });
    const filteredOngs = ongs.map((ong) => {
      ong.pets = ong.pets.filter((pet) => {pet.active === true && pet.to_adopt === false});
      ong.donations = ong.donations.filter((donation) => donation.active === true);
      
      return ong;
    });
  
    return filteredOngs;
  }
  async findAllCity(city:string): Promise<Ong[]> {
    const ongs = await this.typeOrm.find({ where: { city: city , active:true}, relations: ["pets", "donations"] });
    const filteredOngs = ongs.map((ong) => {
      ong.pets = ong.pets.filter((pet) => {pet.active === true && pet.to_adopt === false});
      ong.donations = ong.donations.filter((donation) => donation.active === true);
      
      return ong;
    });
  
    return filteredOngs;
  }
  async update(updateOngDto: UpdateOngInputDto): Promise<Ong> {
    const new_ong = await this.typeOrm.save(updateOngDto);
    return new_ong;
  }
}
