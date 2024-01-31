import User from "./user.entity";

describe("User", () => {
  it("should throw error when username is empty", () => {
    expect(() => {
      new User({
        name: "",
        email: "ollitestando@gmail.com",
        password: "123456789",
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when username is null", () => {
    expect(() => {
      new User({
        name: null,
        email: "ollitestando@gmail.com",
        password: "123456789",
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when username is blank", () => {
    expect(() => {
      new User({
        name: " ",
        email: "ollitestando@gmail.com",
        password: "123456789",
      });
    }).toThrowError("Name is required");
  });
  it("should throw error when email is empty", () => {
    expect(() => {
      new User({
        name: "rafael",
        email: "",
        password: "123456789",
      });
    }).toThrowError("Email is required");
  });

  it("should throw error when email is null", () => {
    expect(() => {
      new User({
        name: "rafael",
        email: null,
        password: "123456789",
      });
    }).toThrowError("Email is required");
  });

  it("should throw error when email is blank", () => {
    expect(() => {
      new User({
        name: "rafael",
        email: "  ",
        password: "123456789",
      });
    }).toThrowError("Email is required");
  });

  it("should throw error when password is empty", () => {
    expect(() => {
      new User({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: "",
      });
    }).toThrowError("Password is required");
  });

  it("should throw error when password is null", () => {
    expect(() => {
      new User({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: null,
      });
    }).toThrowError("Password is required");
  });

  it("should throw error when password is null", () => {
    expect(() => {
      new User({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: " ",
      });
    }).toThrowError("Password is required");
  });

  it("should throw error when password must be at least 4", () => {
    expect(() => {
      new User({
        name: "rafael",
        email: "ollitestando@gmail.com",
        password: "1234",
      });
    }).toThrowError("Password must be at least 4 characters long.");
  });
});
