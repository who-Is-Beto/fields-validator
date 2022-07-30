declare interface IUserData {
  [key: string]: string;
}

declare type TFieldValidationsOption = {
  condition: string | boolean | number | ((value1: any) => unknown);
  message: string;
};

declare type TValidationOptions = {
  minLength?: TFieldValidationsOption;
  maxLength?: TFieldValidationsOption;
  required?: TFieldValidationsOption;
  validEmail?: TFieldValidationsOption;
  validName?: TFieldValidationsOption;
  ValidPassWord?: TFieldValidationsOption;
  customValidation?: TFieldValidationsOption;
  validTelephone?: TFieldValidationsOption;
  equalTo?: TFieldValidationsOption;
};

declare type TFieldValidations = {
  key: string;
  validations?: TValidationsOptions;
};

declare type TkindsOfValidation =
  | "minLength"
  | "maxLength"
  | "equalTo"
  | "required"
  | "validEmail"
  | "validName"
  | "ValidPassWord"
  | "customValidation"
  | "validTelephone"
  | "validURL";

declare type IStandardValidatorResponse = {
  evaluatedKey: string;
  message: string;
  hasError: boolean;
};

declare type IValidatorResponse = IStandardValidatorResponse | IStandardValidatorResponse[];

declare type IValidator = (
  valueToValidate: string,
  validationOptions: TValidationOptions,
  evaluatedKey: string,
  userData: IUserData
) => IValidatorResponse;

declare type IValidatorMap = {
  [key in TkindsOfValidation]: IValidator;
};

declare type IValidatorMapWithDefault = {
  [key in TkindsOfValidation]: IValidator;
};

declare type IValidatorMapWithDefaultAndCustom = {
  [key in TkindsOfValidation]: IValidator;
};

declare type IValidatorMapWithDefaultAndCustomAndRequired = {
  [key in TkindsOfValidation]: IValidator;
};

declare type IValidatorMapWithDefaultAndCustomAndRequiredAndValidEmail = {
  [key in TkindsOfValidation]: IValidator;
};

declare type IValidatorMapWithDefaultAndCustomAndRequiredAndValidEmailAndValidName = {
  [key in TkindsOfValidation]: IValidator;
};

declare type IValidatorMapWithDefaultAndCustomAndRequiredAndValidEmailAndValidNameAndValidPassword =
  {
    [key in TkindsOfValidation]: IValidator;
  };
declare interface IStandardValidatorResponse {
  evaluatedKey: string;
  message: string;
  hasError: boolean;
}
