import { validateEachValue } from "../isValidValue";

const validateValues = (userdata: IUserData, validations: TFieldValidations[]) => {
  let haveErrors = false;
  let errors: Array<IStandardValidatorResponse> = [];
  Object.entries(userdata).forEach(([key, _]) => {
    const validationOptions = validations.find((validation) => validation.key === key);
    if (validationOptions) {
      Object.entries(validationOptions.validations).forEach(([validationKey, validationValue]) => {
        const validation = validateEachValue(
          userdata[key],
          validationKey as TkindsOfValidation,
          validationValue as TFieldValidationsOption,
          key,
          userdata
        );

        if (validation.hasError) {
          haveErrors = true;
          errors.push(validation);
        }
      });
    }
  });

  return {
    haveErrors,
    errors
  };
};

export default validateValues;
