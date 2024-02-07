import { Injectable } from "@nestjs/common";
import { OngRepository } from "../../infra/ongs/ongs.repository";
import Ong from "../../infra/ongs/entities/ong.entity";

@Injectable()
export default class FindAllOngsUsecase {
  constructor(
    // @Inject("OngRepo")
    private ongsRepository: OngRepository,
  ) {}
  async execute(): Promise<Ong[]> {
    try {
      const ongs = await this.ongsRepository.findAll();
      return ongs;
    } catch (err) {
      return err;
    }
  }
}
