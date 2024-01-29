import { LoginEntity } from "src/logins/entities/login.entity";
import { OngEntity } from "src/ongs/entities/ong.entity";


export default interface UserInterface {
    get id(): string;
    get name(): string;
    get email(): string;
    get password(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    get deletedAt(): Date;
    get status(): boolean;
    addLogins(login:LoginEntity): LoginEntity[];
    addOngs(ong:OngEntity): OngEntity[];
    validateUser(): void;
    encryptUsername(): void;
    verifyUsername(name: string): boolean;
    encryptEmail(): void;
    verifyEmail(email: string): boolean;
    encryptPassword();
    verifyPassword(password: string): boolean;
}