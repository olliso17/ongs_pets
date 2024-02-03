import { randomUUID } from "crypto";
import { Login } from "./login.entity";

describe("Login", () => {
  it("should throw error when token is empty", () => {
    expect(() => {
      new Login({
        token: "",
        localhost: "ollitestando@gmail.com",
        user_id: randomUUID(),
      });
    }).toThrowError("Token is required.");
  });
  it("should throw error when token is blank", () => {
    expect(() => {
      new Login({
        token: "  ",
        localhost: "ollitestando@gmail.com",
        user_id: randomUUID(),
      });
    }).toThrowError("Token is required.");
  });
  it("should throw error when token is null", () => {
    expect(() => {
      new Login({
        token: null,
        localhost: "ollitestando@gmail.com",
        user_id: randomUUID(),
      });
    }).toThrowError("Token is required.");
  });
  it("should throw error when localhost is empty", () => {
    expect(() => {
      new Login({
        token: "rafael",
        localhost: "",
        user_id: randomUUID(),
      });
    }).toThrowError("Localhost is required.");
  });
  it("should throw error when localhost is blank", () => {
    expect(() => {
      new Login({
        token: "rafael",
        localhost: "  ",
        user_id: randomUUID(),
      });
    }).toThrowError("Localhost is required.");
  });
  it("should throw error when localhost is null", () => {
    expect(() => {
      new Login({
        token: "rafael",
        localhost: null,
        user_id: randomUUID(),
      });
    }).toThrowError("Localhost is required.");
  });

  it("should throw error when user_id is empty", () => {
    expect(() => {
      new Login({
        token: "rafael",
        localhost: "ollitestando@gmail.com",
        user_id: "",
      });
    }).toThrowError("User id is required.");
  });
  it("should throw error when user_id is blank", () => {
    expect(() => {
      new Login({
        token: "rafael",
        localhost: "ollitestando@gmail.com",
        user_id: "  ",
      });
    }).toThrowError("User id is required.");
  });
  it("should throw error when user_id is null", () => {
    expect(() => {
      new Login({
        token: "rafael",
        localhost: "ollitestando@gmail.com",
        user_id: null,
      });
    }).toThrowError("User id is required.");
  });
});
