export interface IUser {
  googleId: string;
  username: string;
  email: string;
}

export interface IMongoDBUser {
  googleId: string;
  username: string;
  email: string;
  __v: number;
  _id: string;
}
