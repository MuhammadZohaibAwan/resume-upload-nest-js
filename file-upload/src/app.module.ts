import { HttpException, HttpStatus, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: '../uploads',
      limits: {
        fileSize: 4 * 1024 * 1024, // 4MB
      },
      fileFilter: (req, file, callback) => {
        if (
          !file.originalname.match(/\.(doc|docx|pdf)$/) ||
          !file.mimetype.match(/\/(doc|docx|pdf)$/)
        ) {
          callback(
            new HttpException(
              'Only DOC, DOCX, and PDF files are allowed!',
              HttpStatus.FORBIDDEN,
            ),
            false,
          );
        } else {
          callback(null, true);
        }
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
