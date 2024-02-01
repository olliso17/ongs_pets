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
    private readonly ongCreate: CreateOngUsecase,
    @Inject("AxiosInstance") private readonly axios,
  ) {}

  @Post("create")
  async create(@Body() createOngDto: CreateOngInputDto) {
    createOngDto.cnpj = createOngDto.cnpj.replace(/[^\d]/g, "");
    const response = await this.axios.get(
      "https://www.receitaws.com.br/v1/cnpj/" + createOngDto.cnpj,
    );

    if (response.data.staus === "ERROR") {
      return { message: "Cnpj not found" };
    }
    if (response.data.situacao === "ATIVA") {
      createOngDto.name = response.data.nome
      createOngDto.address = response.data.logradouro;
      createOngDto.cep = response.data.cep;
      createOngDto.number_address = response.data.numero;
      createOngDto.neighborhood = response.data.bairro;
      createOngDto.city = response.data.municipio;
      createOngDto.state = response.data.uf;
      createOngDto.telephone = response.data.telefone;
      createOngDto.email_ong = response.data.email;

      return await this.ongCreate.create(createOngDto);
    }
    if (response.data.situacao === "INATIVA" || response.data.situacao === "NULA" || response.data.situacao === "INAPTA" || response.data.situacao === "SUSPENSA" || response.data.situacao === "BAIXADA") {
      return { message: "Cnpj not active" };
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
