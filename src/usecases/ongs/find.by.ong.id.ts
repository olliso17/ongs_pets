import { Injectable } from "@nestjs/common";
import Ong from "src/ongs/entities/ong.entity";
import { OngRepository } from "src/ongs/ongs.repository";

@Injectable()
export default class FindOngByIdUsecase {
  constructor(
    // @Inject("UserRepo")
    private ongRepository: OngRepository,
  ) {}
  async execute(id: string): Promise<Ong | { message: string }> {
    try {
      const ong = await this.ongRepository.find(id);

      return ong;
    } catch (err) {
      return { message: "Ong not found" };
    }
  }
}
