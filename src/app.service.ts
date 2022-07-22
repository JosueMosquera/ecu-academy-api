import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): {} {
    return {
        info:'Api Ecu Academy',
        deploy:'21 de julio'
    }
  }
}
