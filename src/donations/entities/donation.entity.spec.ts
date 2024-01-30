import { randomUUID } from "crypto";
import { DonationEntity } from "./donation.entity";

describe("DonationEntity", () => {
  it("should throw error when ong id is empty", () => {
    expect(() => {
      new DonationEntity({
        ong_id: "",
        description: "idosinho dengoso",
      });
    }).toThrowError("Ong id is required.");
  });
  it("should throw error when ong id is blank", () => {
    expect(() => {
      new DonationEntity({
        ong_id: "  ",
        description: "idosinho dengoso",
      });
    }).toThrowError("Ong id is required.");
  });
  it("should throw error when ong id is null", () => {
    expect(() => {
      new DonationEntity({
        ong_id: null,
        description: "idosinho dengoso",
      });
    }).toThrowError("Ong id is required.");
  });
  it("should throw error when description is empty", () => {
    expect(() => {
      new DonationEntity({
        ong_id: randomUUID(),
        description: "",
      });
    }).toThrowError("Description is required.");
  });
  it("should throw error when description is blank", () => {
    expect(() => {
      new DonationEntity({
        ong_id: randomUUID(),
        description: "  ",
      });
    }).toThrowError("Description is required.");
  });
  it("should throw error when description is null", () => {
    expect(() => {
      new DonationEntity({
        ong_id: randomUUID(),
        description: null,
      });
    }).toThrowError("Description is required.");
  });
});
