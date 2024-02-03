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
  //   async findAll(user_id: string) {
  //     this.typeOrm.findOneOrFail({ where: { user_id } });
  //   }
  async update(updateOngDto: UpdateOngInputDto): Promise<Ong> {
    const new_ong = await this.typeOrm.save(updateOngDto);
    return new_ong;
  }
  // isActiveOngId(Ong_id: string, status: any): Promise<Ong> {
  //   throw new Error("Method not implemented.");
  // }
}
