import { userModel } from "../models/Auth";

const LoginByCredentials = async (
  email: string,
  password: string
): Promise<userModel> => {
  const user: userModel = {
    id: "1000",
    firstName: "Sven",
    lastName: "Lübbe",
    email: "luebbe.sven@gmail.com",
    password: "1234"
  };

  return user;
};

export const userService = {
  LoginByCredentials: LoginByCredentials
};
