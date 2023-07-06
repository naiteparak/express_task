import { writeFile } from 'node:fs/promises';
import { randomUUID } from 'crypto';
import { createUserDto, IUser } from '../interfaces/user.interface';
import { IUsersService } from '../interfaces/users.service.interface';
import users from '../db/users.json';

class UsersService implements IUsersService {
  private usersFilePath: string = `${process.cwd()}/src/db/users.json`;

  getUsers(): IUser[] {
    return users;
  }

  getUserById(id: string): IUser | undefined {
    const users = this.getUsers();
    return users.find((user: IUser) => user.id === id);
  }

  getUserIndexById(id: string): number {
    const users = this.getUsers();
    return users.findIndex((user) => user.id === id);
  }

  async createUser(userData: createUserDto): Promise<IUser> {
    const users = this.getUsers();

    const newUser: IUser = {
      id: randomUUID(),
      ...userData,
      status: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    users.push(newUser);

    await writeFile(this.usersFilePath, JSON.stringify(users));
    return newUser;
  }

  async updateUser(
    id: string,
    userData: Partial<createUserDto>,
  ): Promise<IUser> {
    const users = this.getUsers();
    const userIndex = this.getUserIndexById(id);
    const user = users[userIndex];

    const updatedUser = {
      ...user,
      ...userData,
      updatedAt: new Date().toISOString(),
    };

    users[userIndex] = updatedUser;
    await writeFile(this.usersFilePath, JSON.stringify(users));

    return updatedUser;
  }

  async updateUserStatus(id: string): Promise<IUser> {
    const users = this.getUsers();
    const userIndex = this.getUserIndexById(id);
    const user = users[userIndex];

    const updatedUser = {
      ...user,
      status: true,
      updatedAt: new Date().toISOString(),
    };

    users[userIndex] = updatedUser;
    await writeFile(this.usersFilePath, JSON.stringify(users));
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    const users = this.getUsers();
    const userIndex = this.getUserIndexById(id);
    users.splice(userIndex, 1);
    await writeFile(this.usersFilePath, JSON.stringify(users));
    return;
  }
}

export const usersService = new UsersService();
