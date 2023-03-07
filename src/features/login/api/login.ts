import { users } from "../data/users";
import { LoginResponse } from "../types/login";
import { User } from "../types/user";

export const loginAPI = {
  login: async (
    id: string,
    password: string
  ): Promise<LoginResponse | null> => {
    const user: User | undefined = users.find((user: User) => {
      return user.id === id && user.password === password;
    });

    return user
      ? {
          message: "SUCCESS",
          token: JSON.stringify({ user: user.userInfo, secret: "123qwe!@#" }),
        }
      : null;
  },
};
