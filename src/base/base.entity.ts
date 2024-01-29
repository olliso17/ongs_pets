import { randomUUID } from "crypto";
import BaseEntityInterface from "./base.entity.inteface";

export type BaseEntityProps = {
  id?: string;
  status?: boolean;
  created_at?: Date;
  updated_at?: Date;
  deactivated_at?: Date;
};

export default class BaseEntity implements BaseEntityInterface {
  private _id: string;
  private _status: boolean;
  private _created_at: Date;
  private _updated_at: Date;
  private _deactivated_at: Date;

  constructor(props: BaseEntityProps) {
    this._id = props.id || randomUUID();
    this._status = props.status || true;
    this._created_at = props.created_at || new Date();
    this._deactivated_at = props.deactivated_at || new Date();
    this._updated_at = props.updated_at || new Date();
  }

  activate(date: Date): void {
    this._status = true;
    this._updated_at = date;
  }

  deactivate(date: Date): void {
    this._status = false;
    this._deactivated_at = date;
  }

  update(date: Date): void {
    this._updated_at = date;
  }

  get id(): string {
    return this._id;
  }

  get status(): boolean {
    return this._status;
  }

  get created_at(): Date {
    return this._created_at;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  get deactivated_at(): Date {
    return this._deactivated_at;
  }
}