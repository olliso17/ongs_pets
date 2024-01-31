import BaseEntityInterface from "./base.entity.inteface";
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";



export default class BaseEntity{
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'boolean', default: true })
    active: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
  
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  // @PrimaryGeneratedColumn('uuid')
  // private _id: string;

  // @Column({ type: 'boolean', default: true })
  // private _active: boolean;

  // @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  // private _created_at: Date;

  // @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  // private _updated_at: Date;
  // @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  // private _deleted_at: Date;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    deleted_at: Date;

  // activate(date: Date): void {
  //   this.active = true;
  //   this.updated_at = date;
  // }

  // deactivate(date: Date): void {
  //   this.active = false;
  //   this.deleted_at = date;
  // }

  // update(date: Date): void {
  //   this.updated_at = date;
  // }

  // get id(): string {
  //   return this._id;
  // }

  // get active(): boolean {
  //   return this._active;
  // }

  // get created_at(): Date {
  //   return this._created_at;
  // }

  // get updated_at(): Date {
  //   return this._updated_at;
  // }

  // get deleted_at(): Date {
  //   return this._deleted_at;
  // }
}
