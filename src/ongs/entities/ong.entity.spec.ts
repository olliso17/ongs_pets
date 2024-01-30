import { OngEntity } from "./ong.entity";

describe("UserEntity", () => {
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
  // it("should throw error when cnpj is empty", () => {
  //   expect(() => {
  //     new OngEntity({
  //       name: "danilo",
  //       cnpj: "1234567800019",
  //       address: "string;",
  //       neighborhood: "string;",
  //       state: "string;",
  //       number_address: "string;",
  //       cep: "string;",
  //       user_id: "string;",
  //       telephone: "string;",
  //       maximum_pets: 0,
  //       image: null,
  //     });
  //   }).toThrowError("Cnpj is not valid");
  // });
  //
});
