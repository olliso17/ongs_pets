import { LoginEntity } from 'src/logins/entities/login.entity';
import { OngEntity } from 'src/ongs/entities/ong.entity';
import bcrypt from "bcryptjs";


import uuid from 'uuid';
import UserInterface from './user.entity.interface';
import { regex } from 'src/utils/regexs';

type UserProps = {
    name: string;
    email: string;
    password: string;
    updatedAt?: Date;
    deletedAt?: Date;
    logins?: LoginEntity[] | [];
    ongs?: OngEntity[] | [];
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
    private _logins: LoginEntity[];
    private _ongs: OngEntity[];

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
        if (regex.test(this._id)) {
            throw new Error('Id is not found.');
        }
        if (regex.test(this._name)) {
            throw new Error('Name is not found.');
        }
        if (regex.test(this._email)) {
            throw new Error('Email is not found.');
        }
        if (regex.test(this._password)) {
            throw new Error('Password is not found.');
        }
    }
    addLogins(login: LoginEntity) {
        const arrayLogin = Array()
        arrayLogin.push(login);
        this._logins = arrayLogin;
        return this._logins;
    }
    addOngs(ong: OngEntity) {
        const arrayOng = Array()
        arrayOng.push(ong);
        this._ongs = arrayOng;
        return this._ongs;
    }
    encryptUsername() {
        const salt = bcrypt.genSaltSync();
        this._name = bcrypt.hashSync(this._name, salt);
    }

    verifyUsername(name: string): boolean {
        return bcrypt.compareSync(name, this._name);
    }

    encryptEmail() {
        const salt = bcrypt.genSaltSync();
        this._email = bcrypt.hashSync(this._email, salt);
    }
    verifyEmail(email: string): boolean {
        return bcrypt.compareSync(email, this._email);
    }
    encryptPassword() {
        const salt = bcrypt.genSaltSync();
        this._password = bcrypt.hashSync(this._password, salt);
    }

    verifyPassword(password: string): boolean {
        return bcrypt.compareSync(password, this._password);
    }

}