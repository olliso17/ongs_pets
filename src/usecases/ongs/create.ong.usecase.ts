import { Inject, Injectable } from "@nestjs/common";
import { OngRepository } from "../../infra/ongs/ongs.repository";
import { CreateOngInputDto, MessageErrorDto } from "../../infra/ongs/dto/create-ong.dto";
import Ong from "../../infra/ongs/entities/ong.entity";

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

    try {
      if (response.data.staus === "ERROR" || response.data.message === "CNPJ invalido") {
        return { message: "CNPJ is invalid" }
      }
      if (response.data.situacao === "ATIVA") {
        ong = new Ong({
          name: response.data.nome,
          cnpj: createOngDto.cnpj,
          address: response.data.logradouro,
          neighborhood: response.data.bairro,
          state: response.data.uf,
          number_address: response.data.numero,
          cep: response.data.cep,
          user_id: createOngDto.user_id,
          city:response.data.municipio,
          telephone: response.data.telephone,
          email_ong: response.data.email,
          maximum_pets: createOngDto.maximum_pets,
          image:createOngDto.image
          
        })
      }

      if (
        ["INATIVA", "NULA", "INAPTA", "SUSPENSA", "BAIXADA"].includes(response.data.situacao)
      ) {
        return { message: "Cnpj not active" };
      }



      await this.ongsRepository.create(ong);
      return ong;
    } catch (err) {
      return response.data;
    }
  }
}
