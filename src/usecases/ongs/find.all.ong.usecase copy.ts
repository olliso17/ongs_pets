import { Injectable } from "@nestjs/common";
import { Ong } from "@prisma/client";
import { OngRepository } from "src/infra/ongs/ongs.repository";

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
