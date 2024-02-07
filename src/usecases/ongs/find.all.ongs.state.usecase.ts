import { Injectable } from "@nestjs/common";
import { OngRepository } from "../../infra/ongs/ongs.repository";
import Ong from "../../infra/ongs/entities/ong.entity";
import { FindAllOngStateDto } from '../../infra/ongs/dto/find.all.ong.state.dto';

@Injectable()
export default class FindAllStateOngsUsecase {
  constructor(
    private ongsRepository: OngRepository,
  ) {}
  async execute(findState:FindAllOngStateDto): Promise<Ong[]> {
    try {
      const ongs = await this.ongsRepository.findAllState(findState.state);
      return ongs;
    } catch (err) {
      return err;
    }
  }
}
