import { IUser } from "types/user.types";

export const loginCreds: IUser = {
  email: `${process.env.USER_LOGIN}`,
  password: `${process.env.USER_PASSWORD}`,
};
