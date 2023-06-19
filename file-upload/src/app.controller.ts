import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/candidate')
  @UseInterceptors(FileInterceptor('resume'))
  fileUpload(@UploadedFile() resume: Express.Multer.File): string {
    console.log(resume, '================================================>');
    return this.appService.fileUpload();
  }
}
