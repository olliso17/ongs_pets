import { Module } from "@nestjs/common";
import { OngsController } from "./ongs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import CreateOngUsecase from "src/usecases/ongs/create.ong.usecase";
import { OngRepository } from "./ongs.repository";
import Ong from "./entities/ong.entity";
import axios from "axios";
import FindOngByIdUsecase from "src/usecases/ongs/find.by.ong.id";
import { EditOngUsecase } from "src/usecases/ongs/edit.ong.usecase";
@Module({
  imports: [TypeOrmModule.forFeature([Ong])],
  controllers: [OngsController],
  providers: [
    CreateOngUsecase,
    FindOngByIdUsecase,
    EditOngUsecase,
    OngRepository,
    
    { provide: "AxiosInstance", useValue: axios },
  ],
})
export class OngsModule {}
