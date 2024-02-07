import { Injectable } from "@nestjs/common";
import { OngRepository } from "../../infra/ongs/ongs.repository";
import Ong from "../../infra/ongs/entities/ong.entity";

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
