import { Login } from 'src/logins/entities/login.entity';
import { Ong } from 'src/ongs/entities/ong.entity';
import { User } from '@prisma/client';


import uuid from 'uuid';
import UserInterface from './user.entity.interface';

type UserProps = {
    name: string;
    email: string;
    password: string;
    updatedAt?: Date;
    deletedAt?: Date;
    logins?: Login[] | []
};

export default class UserEntity implements UserInterface {
    private _id: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _createdAt: Date;
    private _updatedAt: Date;
    private _deletedAt: Date;
    private _status: boolean;
    private _logins: Login[]

    constructor(props: UserProps) {
        const date = new Date();
        this._id = uuid.v4();
        this._name = props.name;
        this._email = props.email;
        this._password = props.password;
        this._createdAt = date;
        this._updatedAt = props.updatedAt || null;
        this._deletedAt = props.deletedAt || null;
        this._status = true;
        this._logins = props.logins;
    }

    get id(): string {
        return this._id;
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
    get createdAt(): Date {
        return this._createdAt;
    }
    get updatedAt(): Date {
        return this._updatedAt;
    }
    get deletedAt(): Date {
        return this._deletedAt;
    }
    get status(): boolean {
        return this._status;
    }
    validateUser(): void {
        throw new Error('Method not implemented.');
    }
    addLogins(login: Login ) {
        const arrayLogin = Array()
        arrayLogin.push(login);
        this._logins = arrayLogin;
        return this._logins;
    }

}