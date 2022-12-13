import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProfileService } from './myProfile.service';

@Controller('theProfile')
export class ProfileControler {
  constructor(private readonly profileService: ProfileService) {}

  @Get('takeAllProfile')
  async takeAllProfile() {
    return await this.profileService.takeAllProfile();
  }

  @Post('takeOneProfile')
  async takeOneProfile(@Body() body) {
    if (!body || !body.source || !body.res || !body.source[0] || !body.res[0])
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
}
