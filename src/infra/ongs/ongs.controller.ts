import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from "@nestjs/common";
import { CreateOngInputDto } from "./dto/create-ong.dto";
import CreateOngUsecase from "src/usecases/ongs/create.ong.usecase";
import FindOngByIdUsecase from "src/usecases/ongs/find.by.ong.id";
import { UpdateOngInputDto } from "./dto/update-ong.dto";
import { EditOngUsecase } from "src/usecases/ongs/edit.ong.usecase";
import ActivateOngUsecase from "src/usecases/ongs/activate.ong.usecase";
import { FindByIdOngInputDto } from "./dto/active-ong.dto";
import FindAllOngsUsecase from "src/usecases/ongs/find.all.active.ong.usecase";
import FindAllActiveOngsUsecase from "src/usecases/ongs/find.all.active.ong.usecase";

@Controller()
export class OngsController {
  constructor(
    private readonly ongCreate: CreateOngUsecase,
    private readonly ongFindById: FindOngByIdUsecase,
    private readonly updateOng: EditOngUsecase,
    private readonly activeOng: ActivateOngUsecase,
    private readonly findAllOng: FindAllOngsUsecase,
    private readonly findAllActive:FindAllActiveOngsUsecase
    // @Inject("AxiosInstance") private readonly axios,
  ) {}

  @Post("ong/create")
  async create(@Body() createOngDto: CreateOngInputDto) {

      return await this.ongCreate.create(createOngDto);
 
  }

  @Get("ongs/all")
  findAll() {
    return this.findAllOng.execute();
  }
  @Get("ongs/active")
  findAllOngActive() {
    return this.findAllActive.execute();
  }
  @Patch("ong/activate/:id")
  activate(@Param("id") id: string, @Body() updateOngDto: FindByIdOngInputDto) {
    return this.activeOng.execute(id,updateOngDto);
  }
  @Get("ong/:id")
  findOne(@Param("id") id: string) {
    return this.ongFindById.execute(id);
  }

  @Patch('ong/update/:id')
  update(@Param('id') id: string, @Body() updateOngDto: UpdateOngInputDto) {
    return this.updateOng.execute(id,updateOngDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ongsService.remove(+id);
  // }
}
