import { randomUUID } from "crypto";
import { PetEntity } from "./pet.entity";

describe("PetEntity", () => {
  it("should throw error when name is empty", () => {
    expect(() => {
      new PetEntity({
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
      new PetEntity({
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
      new PetEntity({
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
      new PetEntity({
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
      new PetEntity({
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
      new PetEntity({
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
  it("should throw error when adotpted true", () => {
    const pet = new PetEntity({
      name: "beto",
      species: "cachorro",
      age: 12,
      gender: "macho",
      description: "idosinho dengoso",
      ong_id: "adjgasjajsd",
      image: "",
    });
    pet.isAdopted(true);
    expect(pet.active).toBe(true);
  });
   it("should throw error when adotpted all exist status value", () => {
     const pet = new PetEntity({
       name: "beto",
       species: "cachorro",
       age: 12,
       gender: "macho",
       description: "idosinho dengoso",
       ong_id: "adjgasjajsd",
       image: "",
     });
     expect(() => pet.isAdopted(false)).toThrowError(
       "value already exists of the adoption status.",
     );
   });
    it("should throw error when adotpted all exist status value", () => {
      const pet = new PetEntity({
        name: "beto",
        species: "cachorro",
        age: 12,
        gender: "macho",
        description: "idosinho dengoso",
        ong_id: "adjgasjajsd",
        image: "",
      });
      pet.isAdopted(true);
      expect(pet.isAdopted(false)).toBe(false);
    });

});
