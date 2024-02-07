import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Ong from "./entities/ong.entity";
import { OngsController } from "./ongs.controller";
import CreateOngUsecase from "../../usecases/ongs/create.ong.usecase";
import FindOngByIdUsecase from "../../usecases/ongs/find.by.ong.id";
import { EditOngUsecase } from "../../usecases/ongs/edit.ong.usecase";
import { OngRepository } from "./ongs.repository";
import ActivateOngUsecase from "../../usecases/ongs/activate.ong.usecase";
import FindAllOngsUsecase from "../../usecases/ongs/find.all.ong.usecase copy";
import FindAllActiveOngsUsecase from "../../usecases/ongs/find.all.active.ong.usecase";
import { AuthGuard } from "../auth/auth.guard";
import { RedisOngsRepository } from "../cache/redis-ongs-repository";
import { RedisService } from "../../redis";
import axios from "axios";

@Module({
  imports: [TypeOrmModule.forFeature([Ong])],
  controllers: [OngsController],
  providers: [
    CreateOngUsecase,
    FindOngByIdUsecase,
    EditOngUsecase,
    OngRepository,
    ActivateOngUsecase,
    FindAllOngsUsecase,
    FindAllActiveOngsUsecase,
    AuthGuard,
    RedisOngsRepository,
    RedisService,

    { provide: "AxiosInstance", useValue: axios },
  ],
})
export class OngsModule { }
