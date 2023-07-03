import { writeFile } from 'node:fs/promises';
import { randomUUID } from 'crypto';
import { IUser } from '../interfaces/user.interface';
import { IUsersService } from '../interfaces/users.service.interface';
import users from '../db/users.json';

class UsersService implements IUsersService {
  private usersFilePath: string = `${process.cwd()}/src/db/users.json`;

  getUsers(): IUser[] {
    return users;
  }

  getUserById(id: string): IUser | undefined {
    const users = this.getUsers();
    return users.find((user) => user.id === id);
  }

  async createUser(user: IUser): Promise<IUser> {
    const users = this.getUsers();

    const newUser: IUser = {
      // @ts-ignore
      id: randomUUID(),
      ...user,
      status: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    users.push(newUser);

    await writeFile(this.usersFilePath, JSON.stringify(users));
    return newUser;
  }
}

export const usersService = new UsersService();
