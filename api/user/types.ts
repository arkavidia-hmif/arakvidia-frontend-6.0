export interface User {
  email: string;
  fullName: string;
  currentEducation?: string;
  institution?: string;
  phoneNumber?: string;
  dateJoined: number;
  birthDate?: string;
  address?: string;
}

export enum UserAttributes {
  EMAIL = 'email',
  FULL_NAME = 'fullName',
  CURRENT_EDUCATION = 'currentEducation',
  INSTITUTION = 'institution',
  PHONE_NUMBER = 'phoneNumber',
  BIRTH_DATE = 'birthDate',
  ADDRESS = 'address'
}

export enum LoginStatus {
  INVALID_CREDS, ERROR, EMAIL_NOT_CONFIRMED
}

export enum RegistrationStatus {
  EMAIL_EXISTS, ERROR
}

export enum EmailOperationStatus {
  INVALID_TOKEN, ERROR
}

export interface AuthenticationResult {
  user: User;
  bearerToken: string;
  expiresAt: number;
}
