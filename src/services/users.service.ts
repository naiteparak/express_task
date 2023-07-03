import { readFile, writeFile } from 'node:fs/promises';
import { randomUUID } from 'crypto';
import { IUser } from '../interfaces/user.interface';
import { IUsersService } from '../interfaces/users.service.interface';

class UsersService implements IUsersService {
  private usersFilePath: string = `${process.cwd()}/src/db/users.json`;

  async getUsers(): Promise<[IUser]> {
    const userBuff = await readFile(this.usersFilePath);
    return JSON.parse(userBuff.toString());
  }

  async createUser(user: IUser): Promise<IUser> {
    const users = await this.getUsers();

    const newUser: IUser = {
      // @ts-ignore
      id: randomUUID(),
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(newUser);

    await writeFile(this.usersFilePath, JSON.stringify(users));
    return newUser;
  }
}

export const usersService = new UsersService();
