import { Injectable } from '@nestjs/common';

@Injectable()
export class Api0Service {
    getApi0(){
        return "hello";
    }
}
