import { Module } from "@nestjs/common";
import { OngsService } from "./ongs.service";
import { OngsController } from "./ongs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import CreateOngUsecase from "src/usecases/ongs/create.ong.usecase";
import { OngRepository } from "./ongs.repository";
import Ong from "./entities/ong.entity";
import axios from 'axios';
@Module({
  imports: [TypeOrmModule.forFeature([Ong])],
  controllers: [OngsController],
  providers: [OngsService, CreateOngUsecase, OngRepository, {provide: 'AxiosInstance', useValue: axios }],
})
export class OngsModule {}
