import { Body, Controller, Get, Param, Post, Redirect, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProfileService } from './myProfile.service';
const bcrypt = require('bcryptjs');
// import { FileInterceptor } from '@nestjs/platform-express';
import { fileURLToPath } from 'url';
import { readFile } from 'fs';

@Controller('theProfile')
export class ProfileControler {
  constructor(private readonly profileService: ProfileService) {}

  @Get('takeAllProfile')
  async takeAllProfile() {
    return await this.profileService.takeAllProfile();
  }

  @Post('takeOneProfile')
  async takeOneProfile(@Body() body) {
    if (!body || !body.source || !body.res)
      return 'Erreur de parametrage des argument donner a takeOneProfile(source, res)';
    else {
      return await this.profileService.createStructForAllInfoForOneProfile(
        body.source,
        body.res,
      );
    }
  }

  @Post('mouvProfile')
  async modifProfile(@Body() body) {
    if (!body.type || !body.res || !body.titreModif || !body.modif)
      console.log(
        'Error: les argument rentrer sont incorrect :\nbody.type\nbody.res\nbody.titreModif\nbody.modif',
      );
    else if (body.type === 'profile')
      this.profileService.mouvProfile(body.res, body.titreModif, body.modif);
    else if (body.type === 'formations') {
      this.profileService.mouvFormation(body.res, body.titreModif, body.modif);
    } else if (body.type === 'competances') {
      this.profileService.mouvCompetance(body.res, body.titreModif, body.modif);
    } else if (body.type === 'portfolio') {
      this.profileService.mouvPortfolio(body.res, body.titreModif, body.modif);
    } else
      console.log(
        'Error: body.type doit etre soit :\nprofile\nformation\ncompetance\nportfolio',
      );
  }

  @Post('supProfile')
  async supProfile(@Body() body) {
    if (!body.res)
      console.log('Error: argument incorecte (body.res = id du profile)');
    else this.profileService.supProfile(body.res);
  }

  @Post('addNewProfile')
  async addNewProfile(@Body() body) {
    if (!body.profile) console.log('Error: argument incorecte (body.profile)');
    else this.profileService.addNewProfile(body.profile);
  }

  @Post('CheckPassword')
  async CheckPassword(@Body() body) {
    if (!body.mail || !body.password)
      console.log('Error: argument incorecte (body.mail, body.password)');
    else {
      return await this.profileService.CheckPassword(body.mail, body.password);
    }
  }

  @Post('mouvProfileAll')
  async mouvProfileAll(@Body() body) {
    if (!body.res || !body.profile)
      console.log('Error: argument incorecte (body.res, body.profile)');
    else {
      try {
        await this.profileService.addNewProfile(body.profile);
      } catch (e) {
        console.log(
          'Error: la modification de profile n as pas pus etre realiser',
        );
      }
    }
  }

  // @Post('uplodImg')
  // @UseInterceptors(FileInterceptor('img', { dest: './img' }))
  // uploadFile(@UploadedFile() file) {
  //   return file;
  // }

  // @Post('uplodAudio')
  // @UseInterceptors(FileInterceptor('audio', { dest: './audio' }))
  // uplodAudio(@UploadedFile() file) {
  //   return file;
  // }

  @Get('sendImage:name')
  async sendImage(@Res() res, @Param('name') name) {
    let tmp;
    tmp = await readFile('./img/' + name, (err, data) => {
      console.log('verif :D');
        res.send(data);
    });
  }

  @Post('addNewConnection')
  async sendaddNewConnectionImage(@Body() body) {
    await this.profileService.addNewConnection(body.id);
  }
}
