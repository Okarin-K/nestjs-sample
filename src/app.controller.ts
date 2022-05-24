import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('hello')
  getHello(): { name: string } {
    return { name: 'okarin' };
  }

  @Get('/about')
  @Render('index')
  getAbout(): { message: string } {
    return { message: 'テンプレートエンジンを使ってみたよ' };
  }
}
