import BaseEntity from "./base.entity";

describe("Base Entity Unit Test", () => {
  it("must be able to deactivate an entity", () => {
    const baseEntity = new BaseEntity({});
    baseEntity.deactivate(new Date());
    baseEntity.activate(new Date());
    expect(baseEntity.status).toBe(true);
  });

  it("must be able to activate an entity", () => {
    const baseEntity = new BaseEntity({});
    baseEntity.deactivate(new Date());
    expect(baseEntity.status).toBe(false);
  });
});