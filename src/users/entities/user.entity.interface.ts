import { Login } from "@prisma/client";

export default interface UserInterface {
    get id(): string;
    get name(): string;
    get email(): string;
    get password(): string;
    get createdAt(): Date;
    get updatedAt(): Date;
    get deletedAt(): Date;
    get status(): boolean;
    addLogins(login:Login): Login[];
    validateUser(): void;
}