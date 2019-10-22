// TODO remove eslint disable
/*eslint-disable */
import {ApiError, ArkavidiaBaseApi} from '~/api/base';

export interface User {
  email: String;
  fullName: String;
  currentEducation: string;
  institution: string;
  phoneNumber: string;
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
  expiresAt: number
}

export class ArkavidiaUserApi extends ArkavidiaBaseApi {
  async login(email: String, password: String): Promise<AuthenticationResult> {
    try {
      const data = {email, password};
      const response = await this.axios.post(`/api/auth/login/`, data);
      console.log(response);
      
      return {
        bearerToken: response.data.token,
        expiresAt: response.data.exp * 1000,
        user: response.data.user as User
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
  
  async register(email: String, fullName: String, password: String): Promise<void> {
    try {
      const data = {email, password, fullName};
      await this.axios.post(`/api/auth/register/`, data);
    } catch (e) {
      if (e.response) {
        if (e.response.data.code === "unknown_error") {
          throw new ApiError<RegistrationStatus>(RegistrationStatus.EMAIL_EXISTS, e.response.data.detail);
        }
      }
      
      throw new ApiError<RegistrationStatus>(RegistrationStatus.ERROR, e.toString());
    }
  }
  
  async recover(email: String): Promise<void> {
    // TODO implement
    return;
  }
  
}
