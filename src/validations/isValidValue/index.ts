export const validateEachValue: (
  valueToValidate: string,
  validationKey: TkindsOfValidation,
  validation: TFieldValidationsOption,
  evaluatedKey: string,
  userData: IUserData
) => IStandardValidatorResponse = (
  valueToValidate: string,
  validationKey: TkindsOfValidation,
  validation: TFieldValidationsOption,
  evaluatedKey: string,
  userData: IUserData
): IStandardValidatorResponse => {
  switch (validationKey) {
    case "minLength":
      return {
        evaluatedKey,
        message: validation.message,
        hasError: valueToValidate.length < validation.condition
      };

    case "maxlength":
      return {
        evaluatedKey,
        message: validation.message,
        hasError: valueToValidate.length > validation.condition
      };

    default:
      return {
        evaluatedKey,
        message: "",
        hasError: false
      };
  }
};
