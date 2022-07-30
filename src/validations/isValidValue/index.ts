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
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: valueToValidate.length < validation.condition
      };

    case "maxLength":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: valueToValidate.length > validation.condition
      };

    case "equalTo":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: valueToValidate !== userData[validation.condition as string]
      };

    case "ValidPassWord":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          valueToValidate
        )
      };

    case "validEmail":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(valueToValidate)
      };

    case "required":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: valueToValidate.length === 0
      };

    case "validName":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: !/^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(valueToValidate)
      };

    case "validTelephone":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: !/^[0-9]{10}$/.test(valueToValidate)
      };

    case "customValidation":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError: !(
          validation as {
            condition: (value: unknown) => unknown;
          }
        ).condition(valueToValidate)
      };

    case "validURL":
      return {
        evaluatedKey,
        message: `${validation.message} at ${evaluatedKey}`,
        hasError:
          !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
            valueToValidate
          )
      };
  }
};
