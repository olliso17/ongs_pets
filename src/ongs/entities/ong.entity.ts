import BaseEntity, { BaseEntityProps } from "../../base/base.entity";
import OngEntityInterface from "./ong.entity.interface";
import {
  CnpjValidate,
  NumberRegex,
  StringNotNullAndBlankSpace,
  ValidateCep,
} from "../../util/verify.regex";

type OngProps = BaseEntityProps & {
  name: string;
  cnpj: string;
  address: string;
  neighborhood: string;
  state: string;
  number_address: string;
  cep: string;
  user_id: string;
  telephone: string;
  maximum_pets?: number | 0;
  image?: string | null;
};

export class OngEntity extends BaseEntity implements OngEntityInterface {
  private _name: string;
  private _cnpj: string;
  private _address: string;
  private _neighborhood: string;
  private _state: string;
  private _number_address: string;
  private _cep: string;
  private _user_id: string;
  private _telephone: string;
  private _maximum_pets: number;
  private _image: string;

  constructor(props: OngProps) {
    super(props);
    this._name = props.name;
    this._cnpj = props.cnpj;
    this._address = props.address;
    this._neighborhood = props.neighborhood;
    this._state = props.state;
    this._number_address = props.number_address;
    this._cep = props.cep;
    this._user_id = props.user_id;
    this._telephone = props.telephone;
    this._maximum_pets = props.maximum_pets;
    this._image = props.image;
    this.validationOng();
  }

  get name(): string {
    return this._name;
  }
  get cnpj(): string {
    return this._cnpj;
  }
  get address(): string {
    return this._address;
  }
  get neighborhood(): string {
    return this._neighborhood;
  }
  get state(): string {
    return this._state;
  }
  get number_address(): string {
    return this._number_address;
  }
  get cep(): string {
    return this._cep;
  }
  get user_id(): string {
    return this._user_id;
  }
  get telephone(): string {
    return this._telephone;
  }
  get maximum_pets(): number {
    return this._maximum_pets;
  }
  get image(): string {
    return this._image;
  }
  validationOng() {
    if (StringNotNullAndBlankSpace.test(this._user_id) === false) {
      throw new Error("User id is required.");
    }
    if (CnpjValidate.test(this._cnpj) === false) {
      throw new Error("Cnpj is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._name) === false) {
      throw new Error("Name is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._address) === false) {
      throw new Error("Address is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._neighborhood) === false) {
      throw new Error("Neighborhood is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._state) === false) {
      throw new Error("State is required.");
    }
    if (NumberRegex.test(this._number_address.toString()) === false) {
      throw new Error("Required type number in number address.");
    }
    if (NumberRegex.test(this._maximum_pets.toString()) === false) {
      throw new Error("Required type number in maximum pets.");
    }
    if (ValidateCep.test(this._cep) === false) {
      throw new Error("Cep is not validate.");
    }
    if (StringNotNullAndBlankSpace.test(this._telephone) === false) {
      throw new Error("Telephone is required.");
    }
  }
}
