import { Inject, Injectable } from "@nestjs/common";
import { CreateOngInputDto, MessageErrorDto } from "src/infra/ongs/dto/create-ong.dto";
import Ong from "src/infra/ongs/entities/ong.entity";
import { OngRepository } from "src/infra/ongs/ongs.repository";

@Injectable()
export default class CreateOngUsecase {
  constructor(
    // @Inject("OngRepo")
    private ongsRepository: OngRepository,
    @Inject("AxiosInstance") private readonly axios,
  ) { }
  async create(createOngDto: CreateOngInputDto): Promise<Ong | MessageErrorDto> {
    createOngDto.cnpj = createOngDto.cnpj.replace(/[^\d]/g, "");
    let ong:Ong;
    const response = await this.axios.get(
      "https://www.receitaws.com.br/v1/cnpj/" + createOngDto.cnpj,
    );

    if(response.data.staus === "ERROR" ||response.data.message === "CNPJ invalido"){
      return {message:"CNPJ is invalid"}
    }
    if (response.data.situacao === "ATIVA") {
      Object.assign(ong,createOngDto);
      Object.assign(ong, response.data)
    } 


    if (
      response.data.situacao === "INATIVA" ||
      response.data.situacao === "NULA" ||
      response.data.situacao === "INAPTA" ||
      response.data.situacao === "SUSPENSA" ||
      response.data.situacao === "BAIXADA"
    ) {
      return { message: "Cnpj not active" };
    }
    
    try {
      await this.ongsRepository.create(ong);
      return ong;
    } catch (err) {
      return  {message:err.message};
    }
  }
}
