export default interface BaseEntityInterface {
    get id(): string;
    get status(): boolean;
    get created_at(): Date;
    get updated_at(): Date;
    get deactivated_at(): Date;
    activate(date: Date): void;
    deactivate(date: Date): void;
    update(date: Date): void;
}