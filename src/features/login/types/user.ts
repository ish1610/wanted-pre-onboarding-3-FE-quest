export type UserInfo = {
  id: string;
};

export type User = {
  id: string;
  password: string;
  userInfo: UserInfo;
};
