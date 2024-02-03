import { Base } from "src/infra/bases/entities/base.entity";
import { Login } from "src/infra/logins/entities/login.entity";
import Ong from "src/infra/ongs/entities/ong.entity";
import { Column, Entity, OneToMany } from "typeorm";


type UserProps = {
  name: string;
  email: string;
  password: string;
  logins?: Login[] | [];
  ongs?: Ong[] | [];
  image?: string | "";
};
@Entity({ name: "user" })
export default class User extends Base {
  @Column({ type: "varchar", length: 300 })
  name: string;

  @Column({ type: "varchar", length: 300, unique: true })
  email: string;

  @Column({ type: "varchar", length: 300 })
  password: string;

  @OneToMany(() => Login, login => login.user)
  logins: Login[];

  @OneToMany(() => Ong, ong => ong.user)
  ongs: Ong[];

  @Column({ type: "varchar", length: 300, default: "" })
  image: string;

  constructor(props: UserProps) {
    super();

    Object.assign(this, props);
  }
 
}

