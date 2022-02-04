import { ValidationRules } from "aurelia-validation";

export interface User {
  address: string
  email: string
}

export interface BigObject {
  user: User,
  someOtherField: string
}


export const userRules = ValidationRules
  .ensure<User, string>(user => user.address)
  .required()
  .withMessage("Wallet address is required")
  .ensure<string>(user => user.email)
  .email()
  .withMessage("Please enter a valid e-mail");
