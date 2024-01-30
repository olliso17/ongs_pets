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
  it("should throw error when username is null", () => {
    expect(() => {
      new UserEntity({
        name: null,
        email: "ollitestando@gmail.com",
        password: "123456789",
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when username is blank", () => {
    expect(() => {
      new UserEntity({
        name: " ",
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

  it("should throw error when email is null", () => {
    expect(() => {
      new UserEntity({
        name: "rafael",
        email: null,
        password: "123456789",
      });
    }).toThrowError("Email is required");
  });

  it("should throw error when email is blank", () => {
    expect(() => {
      new UserEntity({
        name: "rafael",
        email: "  ",
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

  it("should throw error when password is null", () => {
    expect(() => {
      new UserEntity({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: null,
      });
    }).toThrowError("Password is required");
  });

  it("should throw error when password is null", () => {
    expect(() => {
      new UserEntity({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: " ",
      });
    }).toThrowError("Password is required");
  });

  it("should throw error when password must be at least 4", () => {
    expect(() => {
      new UserEntity({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: "1234",
      });
    }).toThrowError("Password must be at least 4 characters long.");
  });
});
