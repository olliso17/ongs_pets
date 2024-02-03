export default interface PetEntityInterface {
  get name(): string;
  get species(): string;
  get age(): number;
  get gender(): string;
  get description(): string;
  get ong_id(): string;
  get image(): string;
  get to_adopt(): boolean;
  isAdopted(adopt: boolean): boolean;
  validationPet(): void;
}
