import BaseEntity from "../../base/base.entity";
import LoginInterface from "./login.entity.interface";
import { StringNotNullAndBlankSpace } from "../../util/verify.regex";
import { Column, Entity } from "typeorm";

type LoginProps = {
  token: string;
  user_id: string;
  localhost: string;
};
@Entity()
export class Login extends BaseEntity {
  @Column({ type: "varchar", length: 300 })
  token: string;

  @Column({ type: "varchar", length: 300 })
  user_id: string;

  @Column({ type: "varchar", length: 300 })
  localhost: string;

  constructor(props: LoginProps) {
    super();
    Object.assign(this, props);
    this.validationLogin();
  }

  // private _token: string;
  // private _user_id: string;
  // private _localhost: string;

  // constructor(props: LoginProps) {
  //   super();
  //   token = props.token;
  //   user_id = props.user_id;
  //   localhost = props.localhost;
  //   this.validationLogin();
  // }
  // get token(): string {
  //   return this._token;
  // }
  // get user_id(): string {
  //   return this._user_id;
  // }
  // get localhost(): string {
  //   return this._localhost;
  // }

  validationLogin() {
    if (StringNotNullAndBlankSpace.test(this.token) === false) {
      throw new Error("Token is required.");
    }
    if (StringNotNullAndBlankSpace.test(this.localhost) === false) {
      throw new Error("Localhost is required.");
    }
    if (StringNotNullAndBlankSpace.test(this.user_id) === false) {
      throw new Error("User id is required.");
    }
  }
}
