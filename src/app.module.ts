import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './features/upload/upload.controller';
import { UploadService } from './features/upload/upload.service';
import { UploadModule } from './features/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      //load: [databaseConfig, jwtConfig, adminConfig, googleCloudConfig, smtpConfig],
      isGlobal: true,
    }),
    UploadModule
  ],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule { }
