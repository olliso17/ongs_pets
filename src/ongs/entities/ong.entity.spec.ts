import { OngEntity } from "./ong.entity";

describe("OngEntity", () => {
  it("should throw error when name is empty", () => {
    expect(() => {
      new OngEntity({
        name: "",
        cnpj: "12.345.678/0001-90",
        address: "string;",
        neighborhood: "string;",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when name is empty", () => {
    expect(() => {
      new OngEntity({
        name: "   ",
        cnpj: "12.345.678/0001-90",
        address: "string;",
        neighborhood: "string;",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when name is null", () => {
    expect(() => {
      new OngEntity({
        name: null,
        cnpj: "12.345.678/0001-90",
        address: "string;",
        neighborhood: "string;",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when address is empty", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "",
        neighborhood: "string;",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Address is required");
  });
  it("should throw error when address is null", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: null,
        neighborhood: "string;",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Address is required");
  });
  it("should throw error when address is blank", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "    ",
        neighborhood: "string;",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Address is required");
  });
  it("should throw error when neighborhood is blank", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "   ",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Neighborhood is required");
  });
  it("should throw error when neighborhood is null", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: null,
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Neighborhood is required");
  });
  it("should throw error when neighborhood is empty", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "",
        state: "string;",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Neighborhood is required");
  });
  it("should throw error when state is empty", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("State is required");
  });
  it("should throw error when state is null", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: null,
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("State is required");
  });
  it("should throw error when state is blank", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "    ",
        number_address: "123",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("State is required");
  });
  it("should throw error when number address is blank", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: "  ",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Required type number in number address.");
  });
  it("should throw error when number address is blank", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: null,
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Required type number in number address.");
  });
  it("should throw error when number address is blank", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: "",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Required type number in number address.");
  });
  it("should throw error when cep not found", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: "212",
        cep: "string;",
        user_id: "string;",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("Cep is not validate.");
  });
  it("should throw error when user id is blank", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: "212",
        cep: "string;",
        user_id: "     ",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("User id is required.");
  });
  it("should throw error when user id is empty", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: "212",
        cep: "12345-678",
        user_id: "",
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("User id is required.");
  });
  it("should throw error when user id is null", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "12.345.678/0001-90",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: "212",
        cep: "string;",
        user_id: null,
        telephone: "12334234",
        maximum_pets: 0,
        image: null,
      });
    }).toThrowError("User id is required.");
  });
  it("should throw error when cnpj is empty", () => {
    expect(() => {
      new OngEntity({
        name: "ong pet",
        cnpj: "1234678000190",
        address: "taladd",
        neighborhood: "asdasd",
        state: "se",
        number_address: "212",
        cep: "12345-678",
        user_id: "asdasdsdaad",
        telephone: "12334234",
        maximum_pets: 0,
        image: "",
      });
    }).toThrowError("Cnpj is not valid");
  });
});
