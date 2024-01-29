import UserEntity from "./user.entity";

describe("UserEntity", () => {
  it("should throw error when username is empty", () => {
    expect(() => {
      new UserEntity({
        name: "",
        email: "ollitestando@gmail.com",
        password: "123456789",
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when email is empty", () => {
    expect(() => {
      new UserEntity({
        name: "rafael",
        email: "",
        password: "123456789",
      });
    }).toThrowError("Email is required");
  });

  it("should throw error when password is empty", () => {
    expect(() => {
      new UserEntity({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: "",
      });
    }).toThrowError("Password is required");
  });
});
