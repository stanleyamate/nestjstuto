import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WeeksModule } from './weeks/weeks.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ConfigModule.forRoot({
     load:[configuration],  isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }),
    UserModule,
    AuthModule,
    WeeksModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
