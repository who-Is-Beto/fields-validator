import { validateEachValue } from "./index";

describe("isValidValue()", (): void => {
  test("minLength", (): void => {
    let validation = validateEachValue(
      "beto",
      "minLength",
      {
        condition: 5,
        message: `your name must be at least ${5} characters long`
      },
      "name",
      { name: "beto" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`your name must be at least ${5} characters long at name`);

    validation = validateEachValue(
      "AlertaSismica",
      "minLength",
      {
        condition: 5,
        message: `your name must be at least ${5} characters long`
      },
      "name",
      { name: "beto" }
    );
    expect(validation.hasError).toBe(false);
  });

  test("maxLength", (): void => {
    let validation = validateEachValue(
      "AlertaSismica",
      "maxLength",
      {
        condition: 5,
        message: `your name must be at most ${5} characters long`
      },
      "name",
      { name: "beto" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`your name must be at most ${5} characters long at name`);

    validation = validateEachValue(
      "AlertaSismica",
      "maxLength",
      {
        condition: 10,
        message: `your name must be at most ${10} characters long`
      },
      "name",
      { name: "beto" }
    );
    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`your name must be at most ${10} characters long at name`);

    validation = validateEachValue(
      "AlertaSismica",
      "maxLength",
      {
        condition: 15,
        message: `your name must be at most ${15} characters long`
      },
      "name",
      { name: "beto" }
    );
    expect(validation.hasError).toBe(false);
  });

  test("equalTo", (): void => {
    let validation = validateEachValue(
      "AlertaSismica",
      "equalTo",
      {
        condition: "name",
        message: `your name must be equal to ${"name"}`
      },
      "name",
      { name: "beto" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`your name must be equal to ${"name"} at name`);

    validation = validateEachValue(
      "AlertaSismica",
      "equalTo",
      {
        condition: "name",
        message: `your name must be equal to ${"name"}`
      },
      "name",
      { name: "AlertaSismica" }
    );
    expect(validation.hasError).toBe(false);
  });

  test("ValidPassWord", (): void => {
    let validation = validateEachValue(
      "admin123",
      "ValidPassWord",
      {
        condition: true,
        message: `password must have at least, one uppercase, one lowercase, one number and one special character`
      },
      "password",
      { password: "beto" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(
      `password must have at least, one uppercase, one lowercase, one number and one special character at password`
    );

    validation = validateEachValue(
      "Admin123!",
      "ValidPassWord",
      {
        condition: true,
        message: `password must have at least, one uppercase, one lowercase, one number and one special character`
      },
      "password",
      { password: "Admin123!" }
    );
    expect(validation.hasError).toBe(false);
  });

  test("validEmail", (): void => {
    let validation = validateEachValue(
      "whoisbeto",
      "validEmail",
      {
        condition: true,
        message: `email must be a valid email`
      },
      "email",
      { email: "whoisbeto" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`email must be a valid email at email`);

    validation = validateEachValue(
      "whoisbeto@gmail.com",
      "validEmail",
      {
        condition: true,
        message: `email must be a valid email`
      },
      "email",
      { email: "whoisbeto@gmail.com" }
    );

    expect(validation.hasError).toBe(false);
  });

  test("required", (): void => {
    let validation = validateEachValue(
      "",
      "required",
      {
        condition: true,
        message: `field is required`
      },
      "name",
      { name: "" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`field is required at name`);

    validation = validateEachValue(
      "beto",
      "required",
      {
        condition: true,
        message: `this field is required`
      },
      "name",
      { name: "beto" }
    );

    expect(validation.hasError).toBe(false);
  });

  test("validName", (): void => {
    let validation = validateEachValue(
      "whoIsBeto@",
      "validName",
      {
        condition: true,
        message: `name must be a valid name`
      },
      "name",
      { name: "beto" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`name must be a valid name at name`);

    validation = validateEachValue(
      "whoIsBeto",
      "validName",
      {
        condition: true,
        message: `name must be a valid name`
      },
      "name",
      { name: "Beto" }
    );

    expect(validation.hasError).toBe(false);
  });

  test("validPhone", (): void => {
    let validation = validateEachValue(
      "123456789",
      "validTelephone",
      {
        condition: true,
        message: `phone must be a valid phone`
      },
      "phone",
      { phone: "123456789" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`phone must be a valid phone at phone`);

    validation = validateEachValue(
      "1234-5678",
      "validTelephone",
      {
        condition: true,
        message: `phone must be a valid phone`
      },
      "phone",
      { phone: "123456789" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`phone must be a valid phone at phone`);

    validation = validateEachValue(
      "123",
      "validTelephone",
      {
        condition: true,
        message: `phone must be a valid phone`
      },
      "phone",
      { phone: "123456789" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`phone must be a valid phone at phone`);

    validation = validateEachValue(
      "5523080959",
      "validTelephone",
      {
        condition: true,
        message: `phone must be a valid phone`
      },
      "phone",
      { phone: "5523080959" }
    );

    expect(validation.hasError).toBe(false);
  });

  test("customValidation", (): void => {
    let validation = validateEachValue(
      "cortés",
      "customValidation",
      {
        condition: (lastName: string): boolean => {
          return lastName === "C.M";
        },
        message: "Last name is invalid, must be C.M"
      },
      "lastName",
      { lastName: "cortés" }
    );

    expect(validation.hasError).toBe(true);
    expect(validation.message).toBe(`Last name is invalid, must be C.M at lastName`);

    validation = validateEachValue(
      "C.M",
      "customValidation",
      {
        condition: (lastName: string): boolean => {
          return lastName === "C.M";
        },
        message: "Last name is invalid, must be C.M"
      },
      "lastName",
      { lastName: "C.M" }
    );

    expect(validation.hasError).toBe(false);
  });
});
