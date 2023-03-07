import { users } from "../data/users";
import { User, UserInfo } from "../types/user";

export const userInfoAPI = {
  getUserInfo: async (token: string): Promise<UserInfo | null> => {
    const parsedToken = JSON.parse(token);

    if (!parsedToken?.secret || parsedToken.secret !== "123qwe!@#") return null;

    const loggedUser: User | undefined = users.find((user: User) => {
      if (user.userInfo.id === parsedToken.id) return user;
    });

    return loggedUser ? loggedUser.userInfo : null;
  },
};
