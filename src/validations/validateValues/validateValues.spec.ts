import validateValues from ".";

describe("validateValues", (): void => {
  test("should work", (): void => {
    const userdata = {
      name: "Beto C.M",
      email: "whoisbeto@gmail.com",
      password: "Admin123!",
      repeatPassword: "Admin123!",
      telephone: "5523080959",
      webSite: "https://www.whoisbeto.dev",
      address: "Rua dos Bobos, 0"
    };
    const validations = [
      {
        key: "name",
        validations: {
          required: { condition: true, message: "name is required" },
          minLength: { condition: 4, message: "field must to be 4 length at name" },
          maxLength: { condition: 10, message: "field must to be 10 length at name" },
          validName: { condition: true, message: "field must to be a valid name at name" }
        }
      },
      {
        key: "adress",
        validations: {
          required: { condition: true, message: "Adress is required" },
          validAdress: { condition: true, message: "field must to be a valid address at webSite" }
        }
      },
      {
        key: "",
        validations: {
          required: { condition: true, message: " is required" },
          validAdress: { condition: true, message: "field must to be a valid address at webSite" }
        }
      },
      {
        key: "webSite",
        validations: {
          required: { condition: true, message: "webSite is required" },
          validURL: { condition: true, message: "webSite must be a valid url" }
        }
      },
      {
        key: "email",
        validations: {
          required: { condition: true, message: "email is required" },
          validEmail: { condition: true, message: "email must be a valid email" }
        }
      },
      {
        key: "password",
        validations: {
          ValidPassWord: {
            condition: true,
            message: "password must be a valid password"
          }
        }
      },
      {
        key: "repeatPassword",
        validations: {
          equalTo: {
            condition: "password",
            message: "password must be equal to repeatPassword"
          }
        }
      },
      {
        key: "phone",
        validations: {
          validTelephone: {
            condition: true,
            message: "phone must be a valid phone"
          }
        }
      }
    ];
    const validation = validateValues(userdata, validations);
    expect(validation.haveErrors).toBe(false);
    expect(validation.errors).toEqual([]);
  });

  test("should not work", (): void => {
    const userdata = {
      name: "Beto",
      email: "whoisbeto@gmail.com",
      password: "123456789",
      repeatPassword: "123456789",
      phone: "5523080959",
      webSite: "whoisbeto.dev",
      address: "Rua dos Bobos, 0"
    };
    const validations = [
      {
        key: "name",
        validations: {
          required: { condition: true, message: "name is required" },
          minLength: { condition: 5, message: "field must to be 5 length at name" },
          validName: { condition: true, message: "field must to be a valid name at name" },
          maxLength: { condition: 10, message: "field must to be 10 length at name" },
          customValidation: {
            condition: (lastName: string): boolean => {
              return lastName === "C.M";
            },
            message: "Last name is invalid, must be C.M"
          }
        }
      },
      {
        key: "adress",
        validations: {
          required: { condition: true, message: "webSite is required" },
          validAdress: { condition: true, message: "field must to be a valid address at webSite" }
        }
      },
      {
        key: "webSite",
        validations: {
          required: { condition: true, message: "webSite is required" },
          validURL: { condition: true, message: "webSite must be a valid url" }
        }
      },
      {
        key: "email",
        validations: {
          required: { condition: true, message: "email is required" },
          validEmail: { condition: true, message: "email must be a valid email" }
        }
      },
      {
        key: "password",
        validations: {
          ValidPassWord: {
            condition: true,
            message: "password must be a valid password"
          }
        }
      },
      {
        key: "repeatPassword",
        validations: {
          equalTo: {
            condition: "password",
            message: "password must be equal to repeatPassword"
          }
        }
      },
      {
        key: "phone",
        validations: {
          validTelephone: {
            condition: true,
            message: "phone must be a valid phone"
          }
        }
      }
    ];
    const validation = validateValues(userdata, validations);
    expect(validation.haveErrors).toBe(true);
    expect(validation.errors).toStrictEqual([
      {
        evaluatedKey: "name",
        hasError: true,
        message: "field must to be 5 length at name at name"
      },
      {
        evaluatedKey: "name",
        hasError: true,
        message: "Last name is invalid, must be C.M at name"
      },
      {
        evaluatedKey: "password",
        hasError: true,
        message: "password must be a valid password at password"
      }
    ]);
  });
});
