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

@Controller("ongs")
export class OngsController {
  constructor(
    private readonly ongsService: CreateOngUsecase,
    @Inject("AxiosInstance") private readonly axios,
  ) {}

  @Post("create")
  async create(@Body() createOngDto: CreateOngInputDto) {
    createOngDto.cnpj = createOngDto.cnpj.replace(/\D/cg, "");
    const response = await this.axios.get(
      "https://www.receitaws.com.br/v1/cnpj/" + createOngDto.cnpj,
    );

    if (response.status === 200) {
      return await this.ongsService.create(createOngDto);

    } else {
      
      return {message:"Cnpj not found"};
    }
  }

  // @Get()
  // findAll() {
  //   return this.ongsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ongsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOngDto: UpdateOngDto) {
  //   return this.ongsService.update(+id, updateOngDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ongsService.remove(+id);
  // }
}
