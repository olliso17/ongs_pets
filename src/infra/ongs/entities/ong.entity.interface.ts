import { Pet } from "src/infra/pets/entities/pet.entity";

export default interface OngInterface {
  get name(): string;
  get cnpj(): string;
  get address(): string;
  get neighborhood(): string;
  get state(): string;
  get number_address(): string;
  get cep(): string;
  get user_id(): string;
  get telephone(): string;
  get maximum_pets(): number;
  get image(): string;
  validationOng();
  addPets(pet: Pet): Pet[];
}
