import { IUser } from './user.interface';

export interface IUsersService {
  getUsers(): Promise<[IUser]>;
  createUser(user: IUser): Promise<IUser>;
}
