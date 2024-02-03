
export class CreateOngInputDto {
  cnpj: string;
  user_id: string;
  image?: string;
  maximum_pets?: number;
}

export class MessageErrorDto {
  message: string
}