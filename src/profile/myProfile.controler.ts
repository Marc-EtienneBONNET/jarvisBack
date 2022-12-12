import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MyProfileService } from './myProfile.service';
const bcrypt = require('bcrypt');
 

@Controller('profile')
export class MyProfileControler {
  constructor(private readonly myProfileService: MyProfileService) {}

  @Get('getTakeAll')
  async getProfileTakeAll() {
    return await this.myProfileService.getProfileTakeAll();
  }
  getProfileById

  @Post('profileById')
  async postGetProfileById(@Body() body) {
    if (body.id !== -1) {
      return await this.myProfileService.getProfileById(body.id);
    }
  }


  @Post('postModif')
  async postModifProfile(@Body() body) {
    if (body.id !== -1) {
      await this.myProfileService.getProfileRemoveById(body.id);
    }
    await this.myProfileService.postNewEvent(body);
  }

  @Post('changeMothPass')
  async changeMothPass(@Body() body) {
    let tmp = await bcrypt.hash('passe', 8);
    await this.myProfileService.postNewPass(tmp);
  }


  @Post('Connection')
  async Connection(@Body() body) {
    const listUser = await this.myProfileService.getProfileTakeAll();
    for (let i = 0; listUser[i]; i++) {
      if (listUser[i].mail === body.mail) {
        if ((await bcrypt.compare(body.password, listUser[i].password)) === true){
          await this.myProfileService.MouvIsConnect({
            profile: listUser[i],
            isConnect: true,
          });
          return listUser[i];
        }
      }
    }
  }
}
