import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MyProfileService } from './myProfile.service';

@Controller('profile')
export class MyProfileControler {
  constructor(private readonly myProfileService: MyProfileService) {}

  @Get('getTakeAll')
  async getProfileTakeAll() {
    return await this.myProfileService.getProfileTakeAll();
  }

  @Post('postModif')
  async postModifProfile(@Body() body) {
    if (body.id !== -1) {
      await this.myProfileService.getProfileRemoveById(body.id);
    }
    await this.myProfileService.postNewEvent(body);
  }
}
