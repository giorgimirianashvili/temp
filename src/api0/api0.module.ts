import { Module } from '@nestjs/common';
import { Api0Service } from './api0.service';
import { Api0Controller } from './api0.controller';

@Module({
  controllers: [Api0Controller],
  providers: [Api0Service],
})
export class Api0Module {}
