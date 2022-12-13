import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './myProfile.service';
import { ProfileControler } from './myProfile.controler';
import {
  profile,
  formations,
  competances,
  portfolio,
} from './myProfile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([profile, formations, competances, portfolio]),
  ],
  providers: [ProfileService],
  controllers: [ProfileControler],
})
export class ProfileModule {}
