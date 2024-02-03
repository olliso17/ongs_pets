import { Injectable } from "@nestjs/common";
import { Ong } from "@prisma/client";
import { OngRepository } from "src/infra/ongs/ongs.repository";

@Injectable()
export default class FindAllActiveOngsUsecase {
  constructor(
    // @Inject("OngRepo")
    private ongsRepository: OngRepository,
  ) {}
  async execute(): Promise<Ong[]> {
    try {
      const ongs = await this.ongsRepository.findAllActive();
      return ongs;
    } catch (err) {
      return err;
    }
  }
}
