import { Injectable } from '@nestjs/common';
import AppDataSource from './appDataConnection/appDataConnection';

@Injectable()
export class AppService {
  getHello(): string {
    AppDataSource.initialize()
      .then(() => {
        console.log('App to connect as database');
      })
      .catch((error) => console.log("The app don't connect to database : ", error));
    return 'Hello World!';
  }
}
