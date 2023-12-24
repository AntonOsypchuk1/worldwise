export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserWithId extends IUser {
  id: number;
}

export interface IUserWithSession extends IUserWithId {
  session: boolean;
}
