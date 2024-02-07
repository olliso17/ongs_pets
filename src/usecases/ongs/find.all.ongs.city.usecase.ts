import { Injectable } from "@nestjs/common";
import { OngRepository } from "../../infra/ongs/ongs.repository";
import Ong from "../../infra/ongs/entities/ong.entity";
import { FindAllOngCityDto } from "../../infra/ongs/dto/find.all.ong.city.dto";

@Injectable()
export default class FindAllCityOngsUsecase {
  constructor(
    private ongsRepository: OngRepository,
  ) {}
  async execute(findCity:FindAllOngCityDto): Promise<Ong[]> {
    try {
      const ongs = await this.ongsRepository.findAllCity(findCity.city);
      return ongs;
    } catch (err) {
      return err;
    }
  }
}
