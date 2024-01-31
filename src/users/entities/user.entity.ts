import { Login } from "src/logins/entities/login.entity";
import { Ong } from "src/ongs/entities/ong.entity";
import UserInterface from "./user.entity.interface";
import { MinCountCaractersPassword, StringNotNullAndBlankSpace } from "../../util/verify.regex";
import BaseEntity from "../../base/base.entity";
import { Column, Entity, OneToMany } from "typeorm";

const bcrypt = require("bcryptjs");
type UserProps =  {
  name: string;
  email: string;
  password: string;
  logins?: Login[] | [];
  ongs?: Ong[] | [];
  image?:string | "";
};
@Entity({ name: 'user' })
export default class User
  extends BaseEntity
{


  @Column({ type: 'varchar', length: 300 })
    name: string;

  @Column({ type: 'varchar', length: 300 })
    email: string;

  @Column({ type: 'varchar', length: 300 })
    password: string;

  @OneToMany(() => Login, (login) => login.user_id)
    logins: Login[];

  @OneToMany(() => Ong, (ong) => ong.user_id)
    ongs: Ong[];

  @Column({ type: 'varchar', length: 300 })
    image:string;
    
    
    constructor(props: UserProps) {
      super();
      Object.assign(this, props);
    }
    // @Column({ type: 'varchar', length: 300 })
  // private _name: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _email: string;

  // @Column({ type: 'varchar', length: 300 })
  // private _password: string;

  // @OneToMany(() => Login, (login) => login.user_id)
  // private _logins: Login[];

  // @OneToMany(() => Ong, (ong) => ong.user_id)
  // private _ongs: Ong[];

  // @Column({ type: 'varchar', length: 300 })
  // private _image:string;

  // constructor(props: UserProps) {
  //   super();
  //   this._name = this.encryptUsername(props.name);
  //   this._email = this.encryptEmail(props.email);
  //   this._password = this.encryptPassword(props.password);
  //   this._logins = props.logins;
  //   this._image = props.image;
  // }
 
  // get name(): string {
  //   return this._name;
  // }
  // get email(): string {
  //   return this._email;
  // }
  // get password(): string {
  //   return this._password;
  // }
  // get image(): string {
  //   return this._image;
  // }
  // addLogins(login: Login) {
  //   const arrayLogin = [];
  //   arrayLogin.push(login);
  //   this._logins = arrayLogin;
  //   return this._logins;
  // }
  // addOngs(ong: Ong) {
  //   const arrayOng = [];
  //   arrayOng.push(ong);
  //   this._ongs = arrayOng;
  //   return this._ongs;
  // }
  encryptUsername(name: string): string {
    if (StringNotNullAndBlankSpace.test(name) === false) {
      throw new Error("Name is required.");
    }
    const salt = bcrypt.genSaltSync(10);
    name = bcrypt.hashSync(name, salt);
    return name;
  }

  verifyUsername(name: string): boolean {
    return bcrypt.compareSync(name, this.name);
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
    return bcrypt.compareSync(email, this.email);
  }
  encryptPassword(password: string): string {
    if (StringNotNullAndBlankSpace.test(password) === false) {
      throw new Error("Password is required.");
    }
    if(MinCountCaractersPassword.test(password)) {
      throw new Error("Password must be at least 4 characters long.");
    }
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    return password;
  }

  verifyPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
