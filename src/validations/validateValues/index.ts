import { validateEachValue } from "../isValidValue";

const validateValues = (userdata: IUserData, validations: TFieldValidations[]) => {
  let haveErrors = false;
  let errors: { [key: string]: IStandardValidatorResponse } = {};
  if (Object.entries(userdata).length === 0) {
    errors["userData"] = {
      evaluatedKey: "userData",
      hasError: true,
      message: "User data is empty"
    };
    haveErrors = true;
  }
  if (validations.length === 0) {
    errors["validations"] = {
      evaluatedKey: "userData",
      hasError: true,
      message: "validations are empty"
    };
    haveErrors = true;
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
