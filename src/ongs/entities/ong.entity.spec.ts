import { OngEntity } from "./ong.entity";

describe("UserEntity", () => {
  it("should throw error when name is empty", () => {
    expect(() => {
      new OngEntity({
        name: "",
        cnpj: "string;",
        address: "string;",
        neighborhood: "string;",
        state: "string;",
        number_address: "string;",
        cep: "string;",
        user_id: "string;",
        telephone: "string;",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when name is empty", () => {
    expect(() => {
      new OngEntity({
        name: "   ",
        cnpj: "string;",
        address: "string;",
        neighborhood: "string;",
        state: "string;",
        number_address: "string;",
        cep: "string;",
        user_id: "string;",
        telephone: "string;",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when name is null", () => {
    expect(() => {
      new OngEntity({
        name: null,
        cnpj: "string;",
        address: "string;",
        neighborhood: "string;",
        state: "string;",
        number_address: "string;",
        cep: "string;",
        user_id: "string;",
        telephone: "string;",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Name is required");
  });
    it("should throw error when cnpj is empty", () => {
      expect(() => {
        new OngEntity({
          name: "danilo",
          cnpj: "",
          address: "string;",
          neighborhood: "string;",
          state: "string;",
          number_address: "string;",
          cep: "string;",
          user_id: "string;",
          telephone: "string;",
          maximum_pets: 0,
          image: null,
        });
      }).toThrowError("Name is required");
    });
});
