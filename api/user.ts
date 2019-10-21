// TODO remove eslint disable
/*eslint-disable */
import axios, { ApiError } from '~/api/api';

export interface User {
  email: String;
  fullName: String;
  isStaff: boolean;
  isActive: boolean;
  isEmailConfirmed: boolean;
  lastLogin: Date;
  dateJoined: Date
}

export enum RegistrationStatus {
  SUCCESS, EMAIL_EXISTS, ERROR
}

export enum LoginStatus {
  INVALID_CREDS, ERROR
}

export interface AuthenticationResult {
  user: User;
  bearerToken: String;
}

export async function login(email: String, password: String): Promise<AuthenticationResult> {
  try {
    const data = {email, password};
    const response = await axios.post(`/api/auth/login/`, data);
    console.log(response);
  
    return {
      bearerToken: 'jwt-here',
      user: response.data as User
    };
  } catch (e) {
    if (e.response) {
      if (e.response.data.code === "login_failed" || e.response.data.code === "unknown_error") {
        throw new ApiError<LoginStatus>(LoginStatus.INVALID_CREDS, e.response.data.detail);
      }
    }
    
    throw new ApiError<LoginStatus>(LoginStatus.ERROR, e.toString());
  }
}

export async function register(email: String, fullName: String, password: String): Promise<void> {
  try {
    const data = {email, password, fullName};
    await axios.post(`/api/auth/register/`, data);
  } catch (e) {
    if (e.response) {
      if (e.response.data.code === "unknown_error") {
        // TODO change with actual code
        throw new ApiError<RegistrationStatus>(RegistrationStatus.EMAIL_EXISTS, e.response.data.detail);
      }
    }
    
    throw new ApiError<RegistrationStatus>(RegistrationStatus.ERROR, e.toString());
  }
}

export async function recover(email: String): Promise<void> {
  // TODO implement
  return;
}
