import { Controller, Get } from '@nestjs/common';
import { MyEventService } from './myEvent.service';

@Controller('test')
export class MyEventControler {
  constructor(private readonly myEventService: MyEventService) {}

  @Get()
  getHello(): string {
    return 'test';
  }
}
