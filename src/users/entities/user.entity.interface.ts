import { LoginEntity } from "src/logins/entities/login.entity";
import { OngEntity } from "src/ongs/entities/ong.entity";

export default interface UserEntityInterface {
  get name(): string;
  get email(): string;
  get password(): string;
  addLogins(login: LoginEntity): LoginEntity[];
  addOngs(ong: OngEntity): OngEntity[];
  validateUser(): void;
  encryptUsername(name: string): string;
  verifyUsername(name: string): boolean;
  encryptEmail(email: string): string;
  verifyEmail(email: string): boolean;
  encryptPassword(password: string): string;
  verifyPassword(password: string): boolean;
}
