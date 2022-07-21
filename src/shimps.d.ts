declare interface IUserData {
  [key: string]: string;
}

declare type TFieldValidationsOption = {
  condition: string | boolean | number | ((value1: unknown) => unknown);
  message: string;
};

declare type TValidationOptions = {
  minLength?: TFieldValidationsOption;
  maxLenth?: TFieldValidationsOption;
  required?: TFieldValidationsOption;
  validEmail?: TFieldValidationsOption;
  validName?: TFieldValidationsOption;
  ValidPassWord?: TFieldValidationsOption;
  customValidation?: TFieldValidationsOption;
  validTelephone?: TFieldValidationsOption;
  equalTo?: TFieldValidationsOption;
};

declare type TkindsOfValidation = "minLength" | "maxlength";

declare interface IStandardValidatorResponse {
  evaluatedKey: string;
  message: string;
  hasError: boolean;
}
