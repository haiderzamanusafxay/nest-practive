import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':username/:password')
  getHello(
    @Param('username') username: string,
    @Param('password') password: string,
  ): string {
    return this.appService.getHello(username, password);
  }
}
