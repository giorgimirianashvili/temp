import { Controller } from '@nestjs/common';
import { Api0Service } from './api0.service';

@Controller('api0')
export class Api0Controller {
  constructor(private readonly api0Service: Api0Service) {
  }
  getApi1(){
    return this.api0Service.getApi0();
  }
}
