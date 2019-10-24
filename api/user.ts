import { ApiError, ArkavidiaBaseApi } from '~/api/base';

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

export enum RegistrationStatus {
  EMAIL_EXISTS, ERROR
}

export enum EmailOperationStatus {
  INVALID_TOKEN, ERROR
}

export class ArkavidiaUserApi extends ArkavidiaBaseApi {
  async register(email: string, fullName: string, password: string): Promise<void> {
    try {
      const data = { email, password, fullName };
      await this.axios.post(`/auth/register/`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'unknown_error') {
          throw new ApiError<RegistrationStatus>(RegistrationStatus.EMAIL_EXISTS, e.response.data.detail);
        }
      }

      throw new ApiError<RegistrationStatus>(RegistrationStatus.ERROR, e.toString());
    }
  }

  async recover(email: string): Promise<void> {
    try {
      const data = { email };
      await this.axios.post(`/auth/password-reset/`, data);
    }
    catch (e) {
      throw new ApiError<boolean>(false, e.toString());
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      const data = { token, newPassword };
      await this.axios.post(`/auth/confirm-password-reset/`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'invalid_token' || e.response.data.code === 'token_used') {
          throw new ApiError<EmailOperationStatus>(EmailOperationStatus.INVALID_TOKEN, e.response.data.detail);
        }
      }

      throw new ApiError<EmailOperationStatus>(EmailOperationStatus.ERROR, e.toString());
    }
  }

  async confirmEmailAddress(token: string): Promise<void> {
    try {
      const data = { token };
      await this.axios.post(`/auth/confirm-registration/`, data);
    }
    catch (e) {
      if (e.response) {
        if (e.response.data.code === 'invalid_token') {
          throw new ApiError<EmailOperationStatus>(EmailOperationStatus.INVALID_TOKEN, e.response.data.detail);
        }
      }

      throw new ApiError<EmailOperationStatus>(EmailOperationStatus.ERROR, e.toString());
    }
  }
  async auth(): Promise<User> {
    try {
      const response = await this.axios.get(`/auth/`);
      return {
        fullName: response.data.fullName,
        email: response.data.email,
        dateJoined: response.data.dateJoined,
        currentEducation: response.data.currentEducation,
        institution: response.data.institution,
        phoneNumber: response.data.phoneNumber,
        birthDate: response.data.birthDate,
        address: response.data.address
      };
    }
    catch (e) {
      throw new ApiError<boolean>(false, e.toString());
    }
  }
  async editUser(fullName: string, currentEducation : string, institution: string, phoneNumber: string, birthDate: string, address: string): Promise<User> {
    try {
      const data = { fullName, currentEducation, institution, phoneNumber, birthDate, address };
      const response = await this.axios.patch(`/auth/edit-user/`, data);
      return {
        fullName: response.data.fullName,
        email: response.data.email,
        dateJoined: response.data.dateJoined,
        currentEducation: response.data.currentEducation,
        institution: response.data.institution,
        phoneNumber: response.data.phoneNumber,
        birthDate: response.data.birthDate,
        address: response.data.address
      };
    }
    catch (e) {
      throw new ApiError<boolean>(false, e.toString());
    }
  }
}
