import { Injectable } from "@nestjs/common";
import { RedisService } from "../../redis";
import { OngRepository } from "../ongs/ongs.repository";
import Ong from "../ongs/entities/ong.entity";

@Injectable()
export class RedisOngsRepository {
  constructor(
    private readonly redis: RedisService,
    private readonly ongRepository: OngRepository

  ) { }

  async findAll(): Promise<Ong[]> {
    const cachedOngs = await this.redis.get('ongs');
    if (!cachedOngs) {
      const ongs = await this.ongRepository.findAll();

      await this.redis.set('ongs', JSON.stringify(ongs), 'EX', 15);

      console.log('\x1b[36m%s\x1b[0m', 'From Database');

      return ongs;
    }
    console.log('\x1b[36m%s\x1b[0m', 'From Cache');

    return JSON.parse(cachedOngs);
  }

  async findAllActive(): Promise<Ong[]> {
    const cachedOngs = await this.redis.get('ongs');
    if (!cachedOngs) {
      const ongs = await this.ongRepository.findAllActive();

      await this.redis.set('ongs', JSON.stringify(ongs), 'EX', 15);

      console.log('\x1b[36m%s\x1b[0m', 'From Database');

      return ongs;
    }
    console.log('\x1b[36m%s\x1b[0m', 'From Cache');

    return JSON.parse(cachedOngs);
  }

}
