import { LoginEntity } from "src/logins/entities/login.entity";
import { OngEntity } from "src/ongs/entities/ong.entity";
import UserEntityInterface from "./user.entity.interface";
import { MinCountCaractersPassword, StringNotNullAndBlankSpace } from "../../util/verify.regex";
import BaseEntity, { BaseEntityProps } from "../../base/base.entity";

const bcrypt = require("bcryptjs");
type UserProps = BaseEntityProps & {
  name: string;
  email: string;
  password: string;
  updatedAt?: Date;
  deletedAt?: Date;
  logins?: LoginEntity[] | [];
  ongs?: OngEntity[] | [];
};

export default class UserEntity
  extends BaseEntity
  implements UserEntityInterface
{
  private _name: string;
  private _email: string;
  private _password: string;
  private _logins: LoginEntity[];
  private _ongs: OngEntity[];

  constructor(props: UserProps) {
    super(props);
    this._name = this.encryptUsername(props.name);
    this._email = this.encryptEmail(props.email);
    this._password = this.encryptPassword(props.password);
    this._logins = props.logins;
  }
 

  get name(): string {
    return this._name;
  }
  get email(): string {
    return this._email;
  }
  get password(): string {
    return this._password;
  }

  addLogins(login: LoginEntity) {
    const arrayLogin = [];
    arrayLogin.push(login);
    this._logins = arrayLogin;
    return this._logins;
  }
  addOngs(ong: OngEntity) {
    const arrayOng = [];
    arrayOng.push(ong);
    this._ongs = arrayOng;
    return this._ongs;
  }
  encryptUsername(name: string): string {
    if (StringNotNullAndBlankSpace.test(name) === false) {
      throw new Error("Name is required.");
    }
    const salt = bcrypt.genSaltSync(10);
    name = bcrypt.hashSync(name, salt);
    return name;
  }

  verifyUsername(name: string): boolean {
    return bcrypt.compareSync(name, this._name);
  }

  encryptEmail(email: string): string {
    if (StringNotNullAndBlankSpace.test(email) === false) {
      throw new Error("Email is required.");
    }
    const salt = bcrypt.genSaltSync(10);
    email = bcrypt.hashSync(email, salt);
    return email;
  }
  verifyEmail(email: string): boolean {
    return bcrypt.compareSync(email, this._email);
  }
  encryptPassword(password: string): string {
    if (StringNotNullAndBlankSpace.test(password) === false) {
      throw new Error("Password is required.");
    }
    // if(MinCountCaractersPassword.test(password) === false) {
    //   throw new Error("Password must be at least 4 characters long.");
    // }
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    return password;
  }

  verifyPassword(password: string): boolean {
    return bcrypt.compareSync(password, this._password);
  }
}
