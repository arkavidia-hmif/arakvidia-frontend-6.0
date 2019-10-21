// TODO remove eslint disable
/*eslint-disable */
import axios from '~/api/api-axios';

export interface User {
  email: String;
  fullName: String;
  userId: String;
}

export enum RegistrationStatus {
  SUCCESS, EMAIL_EXISTS, ERROR
}

export interface RegistrationResult {
  status: RegistrationStatus,
  message?: string
}

export interface AuthenticationResult {
  user: User;
  bearerToken: String;
}

export async function login(email: String, password: String): Promise<AuthenticationResult> {
  const data = { email, password };
  const response = await axios.post(`${process.env.API_BASE_URL}/api/auth/login/`, data);
  console.log(response);

  return {
    bearerToken: 'jwt-here',
    user: {
      email,
      fullName: 'Ahmad Fahmi Pratama',
      userId: 'afahmip128d'
    }
  };
}

export async function register(email: String, fullName: String, password: String): Promise<RegistrationResult> {
  try {
    const data = {email, password};
    const response = await axios.post(`${process.env.API_BASE_URL}/api/auth/register/`, data);
    const code = response.data.error;
    let status;

    switch (code) {
      case "registration_successful":
        status = RegistrationStatus.SUCCESS;
        break;
      default:
        status = RegistrationStatus.EMAIL_EXISTS;
        break;
    }

    return {
      status: status,
      message: response.data.detail
    }
  } catch (e) {
    throw {
      status: RegistrationStatus.ERROR,
      message: e.toString()
    }
  }
}

export async function recover(email: String): Promise<void> {
  // TODO implement
  return;
}
