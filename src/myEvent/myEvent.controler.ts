import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MyEventService } from './myEvent.service';

@Controller('event')
export class MyEventControler {
  constructor(private readonly myEventService: MyEventService) {}

  @Get('getTakeAll')
  async getEventTakeAll() {
    return await this.myEventService.getEventTakeAll();
  }

  @Get('getTakeById:id')
  async getEventTakeById(@Param('id') id) {
    return await this.myEventService.getEventTakeById(id);
  }

  @Post('getRemoveById')
  async getEventRemoveById(@Body() body) {
    await this.myEventService.getEventRemoveById(body.id);
  }

  @Post('postAddNew')
  async postAddNewEvent(@Body() body) {
    if (body.id != -1) {
      await this.getEventRemoveById(body.id);
    }
    await this.myEventService.postNewEvent(body);
  }

  @Post('postModif')
  async postModifEvent(@Body() body) {
    if (body.id !== -1) {
      await this.myEventService.getEventRemoveById(body.id);
    }
    await this.myEventService.postNewEvent(body);
  }
}
