import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(username: string, password: string): string {
    return `Hello ${username}! AND your password is ${password}`;
  }
}
