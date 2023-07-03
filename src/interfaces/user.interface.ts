export interface IUser {
  id: string;
  name: string;
  age: number;
  gender: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface createUserDto {
  name: string;
  age: number;
  gender: string;
}
