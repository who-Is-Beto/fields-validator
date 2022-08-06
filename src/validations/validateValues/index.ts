import { validateEachValue } from "../isValidValue";

const validateValues = (userdata: IUserData, validations: TFieldValidations[]) => {
  let haveErrors = false;
  let errors: { [key: string]: IStandardValidatorResponse } = {};
  if (Object.entries(userdata).length === 0) {
    return {
      evaluatedKey: "userData",
      haveErrors: true,
      errors: [{ message: "userdata is empty", hasError: true }]
    };
  }
  if (validations.length === 0) {
    return {
      evaluatedKey: "validations",
      haveErrors: true,
      errors: [{ message: "validations are empty", hasError: true }]
    };
  }
  Object.entries(userdata).forEach(([key, _]) => {
    const validationOptions = validations.find((validation) => validation.key === key);
    if (validationOptions) {
      Object.entries((validationOptions as any).validations).forEach(
        ([validationKey, validationValue]) => {
          const validation = validateEachValue(
            userdata[key],
            validationKey as TkindsOfValidation,
            validationValue as TFieldValidationsOption,
            key,
            userdata
          );

          if (validation.hasError) {
            haveErrors = true;
            errors[validation.evaluatedKey] = validation;
          }
        }
      );
    }
  });

  return {
    haveErrors,
    errors
  };
};

export default validateValues;
