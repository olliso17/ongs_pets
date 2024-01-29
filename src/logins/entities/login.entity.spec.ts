import { randomUUID } from "crypto";
import { LoginEntity } from "./login.entity";

describe("LoginEntity", () => {
    it("should throw error when token is empty", () => {
        expect(() => {
          new LoginEntity({
            token: "",
            localhost: "ollitestando@gmail.com",
            user_id: randomUUID(),
          });
        }).toThrowError("Token is required.");
      });
    it("should throw error when localhost is empty", () => {
      expect(() => {
        new LoginEntity({
          token: "rafael",
          localhost: "",
          user_id: randomUUID(),
        });
      }).toThrowError("Localhost is required.");
    });
  
    it("should throw error when user_id is empty", () => {
      expect(() => {
        new LoginEntity({
          token: "rafael",
          localhost: "ollitestando@gmail.com",
          user_id: "",
        });
      }).toThrowError("User id is required.");
    });
  });