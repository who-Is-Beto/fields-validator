import { validateEachValue } from "./index";

describe("isValidValue()", (): void => {
  test("minLength", (): void => {
    validateEachValue("beto", "minLength");
  });
});
