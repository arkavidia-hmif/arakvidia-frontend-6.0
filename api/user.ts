// TODO remove eslint disable
/*eslint-disable */

export interface User {
  email: String;
  fullName: String;
  userId: String;
}

export interface AuthenticationResult {
  user: User;
  bearerToken: String;
}

export async function login(email: String, password: String): Promise<AuthenticationResult> {
  return {
    bearerToken: 'jwt-here',
    user: {
      email,
      fullName: 'Ahmad Fahmi Pratama',
      userId: 'afahmip128d'
    }
  };
}

export async function register(email: String, fullName: String, password: String): Promise<User> {
  return {
    email,
    fullName: 'Ahmad Fahmi Pratama',
    userId: 'afahmip128d'
  };
}
