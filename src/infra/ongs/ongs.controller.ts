import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
  Req,
} from "@nestjs/common";
import { CreateOngInputDto } from "./dto/create-ong.dto";
import CreateOngUsecase from "src/usecases/ongs/create.ong.usecase";
import FindOngByIdUsecase from "src/usecases/ongs/find.by.ong.id";
import { UpdateOngInputDto } from "./dto/update-ong.dto";
import { EditOngUsecase } from "src/usecases/ongs/edit.ong.usecase";
import ActivateOngUsecase from "src/usecases/ongs/activate.ong.usecase";
import { FindByIdOngInputDto } from "./dto/active-ong.dto";
import FindAllActiveOngsUsecase from "src/usecases/ongs/find.all.active.ong.usecase";
import FindAllOngsUsecase from "src/usecases/ongs/find.all.ong.usecase copy";
import { AuthGuard, Public } from "../auth/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('ongs')
@Controller()
export class OngsController {
  constructor(
    private readonly ongCreate: CreateOngUsecase,
    private readonly ongFindById: FindOngByIdUsecase,
    private readonly updateOng: EditOngUsecase,
    private readonly activeOng: ActivateOngUsecase,
    private readonly findAll: FindAllOngsUsecase,
    private readonly findAllActive: FindAllActiveOngsUsecase
    // @Inject("AxiosInstance") private readonly axios,
  ) { }

  @Post("ong/create")
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  async create(@Body() createOngDto: CreateOngInputDto, @Req() req) {
    console.log('Received request:', req.body, req.headers);
    return await this.ongCreate.create(createOngDto);

  }

  @Public()
  @Get("ongs/all")
  findAllOng() {
    return this.findAll.execute();
  }
  @Public()
  @Get("ongs/active")
  findAllOngActive() {
    return this.findAllActive.execute();
  }
  @Patch("ong/activate/:id")
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  activate(@Param("id") id: string, @Body() updateOngDto: FindByIdOngInputDto) {
    return this.activeOng.execute(id, updateOngDto);
  }
  @Public()
  @Get("ong/:id")
  findOne(@Param("id") id: string) {
    return this.ongFindById.execute(id);
  }

  @Patch('ong/update/:id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  update(@Param('id') id: string, @Body() updateOngDto: UpdateOngInputDto) {
    return this.updateOng.execute(id, updateOngDto);
  }

}
