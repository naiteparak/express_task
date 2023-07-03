import { createUserDto, IUser } from './user.interface';

export interface IUsersService {
  getUsers(): IUser[];
  getUserById(id: string): IUser | undefined;
  getUserIndexById(id: string): number;
  createUser(userData: Partial<createUserDto>): Promise<IUser>;
  updateUser(id: string, userData: createUserDto): Promise<IUser>;
  updateUserStatus(id: string): void;
  deleteUser(id: string): void;
}
