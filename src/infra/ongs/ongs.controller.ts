import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import CreateOngUsecase from "../../usecases/ongs/create.ong.usecase";
import FindOngByIdUsecase from "../../usecases/ongs/find.by.ong.id";
import { EditOngUsecase } from "../../usecases/ongs/edit.ong.usecase";
import ActivateOngUsecase from "../../usecases/ongs/activate.ong.usecase";
import FindAllOngsUsecase from "../../usecases/ongs/find.all.ong.usecase copy";
import FindAllActiveOngsUsecase from "../../usecases/ongs/find.all.active.ong.usecase";
import { AuthGuard, Public } from "../auth/auth.guard";
import { CreateOngInputDto } from "./dto/create-ong.dto";
import { FindByIdOngInputDto } from "./dto/active-ong.dto";
import { UpdateOngInputDto } from "./dto/update-ong.dto";
import FindAllStateOngsUsecase from "../../usecases/ongs/find.all.ongs.state.usecase";
import { FindAllOngStateDto } from "./dto/find.all.ong.state.dto";
import { FindAllOngCityDto } from "./dto/find.all.ong.city.dto";
import FindAllCityOngsUsecase from "../../usecases/ongs/find.all.ongs.city.usecase";

@ApiTags('ongs')
@Controller()
export class OngsController {
  constructor(
    private readonly ongCreate: CreateOngUsecase,
    private readonly ongFindById: FindOngByIdUsecase,
    private readonly updateOng: EditOngUsecase,
    private readonly activeOng: ActivateOngUsecase,
    private readonly findAll: FindAllOngsUsecase,
    private readonly findAllActive: FindAllActiveOngsUsecase,
    private readonly findAllState: FindAllStateOngsUsecase,
    private readonly findAllCity: FindAllCityOngsUsecase
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
  @Public()
  @Get("ongs/:state")
  findAllOngState(@Param("state") findAllState: FindAllOngStateDto) {
    return this.findAllState.execute(findAllState);
  }
  @Public()
  @Get("ongs/:city")
  findAllOngCity(@Param("city") findAllCity: FindAllOngCityDto) {
    return this.findAllCity.execute(findAllCity);
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
