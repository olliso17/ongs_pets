export default interface BaseEntityInterface {
    get id(): string;
    get active(): boolean;
    get created_at(): Date;
    get updated_at(): Date;
    get deleted_at(): Date;
    activate(date: Date): void;
    deactivate(date: Date): void;
    update(date: Date): void;
}