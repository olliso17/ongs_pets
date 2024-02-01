import { Injectable } from "@nestjs/common";
import { CreateOngInputDto } from "src/ongs/dto/create-ong.dto";
import Ong from "src/ongs/entities/ong.entity";
import { OngRepository } from "src/ongs/ongs.repository";

@Injectable()
export default class CreateOngUsecase {
  constructor(
    // @Inject("OngRepo")
    private ongsRepository: OngRepository,
  ) {}
  async create(createOngDto: CreateOngInputDto): Promise<Ong | string> {
    const ong = new Ong(createOngDto);
    try {
      await this.ongsRepository.create(ong);
      return ong;
    } catch (err) {
      return err;
    }
  }
}
