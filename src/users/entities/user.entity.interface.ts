import { Login } from "src/logins/entities/login.entity";
import { Ong } from "src/ongs/entities/ong.entity";

export default interface UserInterface {
  get name(): string;
  get email(): string;
  get password(): string;
  get image(): string;
  addLogins(login: Login): Login[];
  addOngs(ong: Ong): Ong[];
  encryptUsername(name: string): string;
  verifyUsername(name: string): boolean;
  encryptEmail(email: string): string;
  verifyEmail(email: string): boolean;
  encryptPassword(password: string): string;
  verifyPassword(password: string): boolean;
}
