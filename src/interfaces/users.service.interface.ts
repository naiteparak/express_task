import { IUser } from './user.interface';

export interface IUsersService {
  getUsers(): IUser[];
  getUserById(id: string): IUser | undefined;
  createUser(user: IUser): Promise<IUser>;
}
