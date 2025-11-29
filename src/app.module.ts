import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Api0Module } from './api0/api0.module';

@Module({
  imports: [Api0Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
