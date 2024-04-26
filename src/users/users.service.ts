import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): any {
    return { name: 'Ali Khan', age: 20, gender: 'male' };
  }
}
