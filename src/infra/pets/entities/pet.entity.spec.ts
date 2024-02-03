import { randomUUID } from "crypto";
import { Pet } from "./pet.entity";

describe("Pet", () => {
  it("should throw error when name is empty", () => {
    expect(() => {
      new Pet({
        name: "",
        species: "cachorro",
        age: 12,
        gender: "macho",
        description: "idosinho dengoso",
        ong_id: randomUUID(),
        image: "",
      });
    }).toThrowError("Name is required.");
  });
  it("should throw error when name is blank", () => {
    expect(() => {
      new Pet({
        name: "    ",
        species: "cachorro",
        age: 12,
        gender: "macho",
        description: "idosinho dengoso",
        ong_id: randomUUID(),
        image: "",
      });
    }).toThrowError("Name is required.");
  });
  it("should throw error when name is null", () => {
    expect(() => {
      new Pet({
        name: null,
        species: "cachorro",
        age: 12,
        gender: "macho",
        description: "idosinho dengoso",
        ong_id: randomUUID(),
        image: "",
      });
    }).toThrowError("Name is required.");
  });
  it("should throw error when ong id is null", () => {
    expect(() => {
      new Pet({
        name: "beto",
        species: "cachorro",
        age: 12,
        gender: "macho",
        description: "idosinho dengoso",
        ong_id: null,
        image: "",
      });
    }).toThrowError("Ong id is required.");
  });
  it("should throw error when ong id is blank", () => {
    expect(() => {
      new Pet({
        name: "beto",
        species: "cachorro",
        age: 12,
        gender: "macho",
        description: "idosinho dengoso",
        ong_id: " ",
        image: "",
      });
    }).toThrowError("Ong id is required.");
  });

  it("should throw error when ong id is empty", () => {
    expect(() => {
      new Pet({
        name: "beto",
        species: "cachorro",
        age: 12,
        gender: "macho",
        description: "idosinho dengoso",
        ong_id: "",
        image: "",
      });
    }).toThrowError("Ong id is required.");
  });
  // it("should throw error when adotpted true", () => {
  //   const pet = new Pet({
  //     name: "beto",
  //     species: "cachorro",
  //     age: 12,
  //     gender: "macho",
  //     description: "idosinho dengoso",
  //     ong_id: "adjgasjajsd",
  //     image: "",
  //   });
  //   pet.isAdopted();
  //   expect(pet.active).toBe(true);
  // });
  //  it("should throw error when adotpted all exist status value", () => {
  //    const pet = new Pet({
  //      name: "beto",
  //      species: "cachorro",
  //      age: 12,
  //      gender: "macho",
  //      description: "idosinho dengoso",
  //      ong_id: "adjgasjajsd",
  //      image: "",
  //    });
  //    expect(() => pet.isAdopted()).toThrowError(
  //      "value already exists of the adoption status.",
  //    );
  // //  });
  //   it("should throw error when adotpted all exist status value", () => {
  //     const pet = new Pet({
  //       name: "beto",
  //       species: "cachorro",
  //       age: 12,
  //       gender: "macho",
  //       description: "idosinho dengoso",
  //       ong_id: "adjgasjajsd",
  //       image: "",
  //     });

  //     pet.isAdopted();
  //     expect(pet.isAdopted()).toBe(false);

  //   });

});
