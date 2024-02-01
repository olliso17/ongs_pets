
export class CreateOngInputDto {
  name: string;
  cnpj: string;
  city: string;
  address: string;
  neighborhood: string;
  state: string;
  number_address: string;
  cep: string;
  user_id: string;
  email_ong?:string;
  telephone: string;
  maximum_pets: number;
  image?: string | null;
}

