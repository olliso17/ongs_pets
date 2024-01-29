import BaseEntity, { BaseEntityProps } from "src/base/base.entity";
import LoginEntityInterface from "./login.entity.interface";
import StringNotNullAndBlankSpace from "src/util/verify.regex";

type LoginProps = BaseEntityProps & {
  token: string;
  user_id: string;
  localhost: string;
};

export class LoginEntity extends BaseEntity implements LoginEntityInterface {
  private _token: string;
  private _user_id: string;
  private _localhost: string;

  constructor(props: LoginProps) {
    super(props);
    this._token = props.token;
    this._user_id = props.user_id;
    this._localhost = props.localhost;
  }
  get token(): string {
    return this._token;
  }
  get user_id(): string {
    return this._user_id;
  }
  get localhost(): string {
    return this._localhost;
  }

  validationLogin() {
    if (StringNotNullAndBlankSpace.test(this._token) === false) {
      throw new Error("Token is required.");
    }
    if (StringNotNullAndBlankSpace.test(this.user_id) === false) {
      throw new Error("User id is required.");
    }
    if (StringNotNullAndBlankSpace.test(this._localhost) === false) {
      throw new Error("Localhost is required.");
    }
  }
}
