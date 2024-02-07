import { randomUUID } from "crypto";
import { Donation } from "./donation.entity";

describe("Donation", () => {
  it("should throw error when ong id is empty", () => {
    expect(() => {
      new Donation({
        ong_id: "",
        description: "idosinho dengoso",
      });
    }).toThrowError("Ong id is required.");
  });
  it("should throw error when ong id is blank", () => {
    expect(() => {
      new Donation({
        ong_id: "  ",
        description: "idosinho dengoso",
      });
    }).toThrowError("Ong id is required.");
  });
  it("should throw error when ong id is null", () => {
    expect(() => {
      new Donation({
        ong_id: null,
        description: "idosinho dengoso",
      });
    }).toThrowError("Ong id is required.");
  });
  it("should throw error when description is empty", () => {
    expect(() => {
      new Donation({
        ong_id: randomUUID(),
        description: "",
      });
    }).toThrowError("Description is required.");
  });
  it("should throw error when description is blank", () => {
    expect(() => {
      new Donation({
        ong_id: randomUUID(),
        description: "  ",
      });
    }).toThrowError("Description is required.");
  });
  it("should throw error when description is null", () => {
    expect(() => {
      new Donation({
        ong_id: randomUUID(),
        description: null,
      });
    }).toThrowError("Description is required.");
  });
});
